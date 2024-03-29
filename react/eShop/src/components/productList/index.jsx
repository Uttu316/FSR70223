import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getFilteredProducts, getProducts } from "../../actions/homeActions";
import ProductCardSkeleton from "../loaders/productCardSekeleton";
import ProductCard from "../productCards";
import NoProductImg from "../../assets/noProduct.svg";
import ErrorImg from "../../assets/error.svg";
import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [apiStatus, setApiStatus] = useState("");
  const [param] = useSearchParams();
  const category = param.get("category");
  const sortBy = param.get("sortBy");

  const fetchProducts = () => {
    setApiStatus("loading");
    let productsPromise = null;
    if (category) {
      productsPromise = getFilteredProducts();
    } else {
      productsPromise = getProducts();
    }

    productsPromise
      .then(({data}) => {
        setProducts(data);
        setApiStatus("success");
      })
      .catch((err) => {
        setApiStatus("error");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [category,sortBy]);

  const showLoader = apiStatus === "loading";
  const isEmptyArray = Array.isArray(products) && !products.length;
  const noProduct = apiStatus === "success" && (!products || isEmptyArray);
  const error = apiStatus === "error";
  return (
    <Container>
      <Stack my={6} gap={4} flexWrap={"wrap"} direction="row">
        {Array.isArray(products) &&
          products.map((product) => (
            <ProductCard key={product.id} info={product} />
          ))}
        {showLoader &&
          [0, 0, 0, 0].map((_, index) => <ProductCardSkeleton key={index} />)}

        {noProduct && (
          <Box sx={{ margin: "0 auto", textAlign: "center" }}>
            <img height={400} width={"100%"} src={NoProductImg} />
            <Typography variant="h5" mt={4} color="gray" component={"p"}>
              No Product Available
            </Typography>
          </Box>
        )}
        {error && (
          <Box sx={{ margin: "0 auto", textAlign: "center" }}>
            <img height={300} width={"100%"} src={ErrorImg} />
            <Typography variant="h5" mt={4} color="gray" component={"p"}>
              Something went wrong
            </Typography>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default ProductList;
