import {
  Container,
  Stack,
  Box,
  Typography,
  Rating,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../../actions/productActions";
import ProductCardSkeleton from "../loaders/productCardSekeleton";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendIcon from '@mui/icons-material/Send';

const ProductContainer = () => {
  const [product, setProduct] = useState(null);
  const [apiStatus, setApiStatus] = useState("");
  const { id: productId } = useParams();

  const fetchProduct = async () => {
    setApiStatus("loading");
    try {
      const { data: productData } = await getProductInfo(productId);
      setProduct(productData);
      setApiStatus("success");
    } catch (e) {
      console.log(e);
      setApiStatus("error");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const isLoading = apiStatus === "loading";
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {!isLoading&&product && (
        <Stack direction={{ sm: "column", md: "row" }} gap={20}>
          <Box
            maxHeight={500}
            width={{
              sm: "100%",
              md: "50%",
            }}
            margin={"auto"}
            minWidth={320}
            maxWidth={600}
          >
            <img
              height={"100%"}
              width="100%"
              src={product.image}
              alt={product.title}
            />
          </Box>
          <Box>
            <Typography color="black" gutterBottom variant="h3" component="h3">
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {product.description}
            </Typography>
            <Box
              sx={{
                my: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={product.rating.rate}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2, fontSize: 18, fontWeight: "bold" }}>
                Total reviews: {product.rating.count}
              </Box>
            </Box>
            <Typography mt={2} fontWeight={700} color="green" variant="h4">
              Rs. {product.price}
            </Typography>
            <Chip sx={{ mt: 2 }} label={product.category.toUpperCase()} />
            <Grid container={true} spacing={4} my={2}>
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Buy Now
                </Button>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<ShoppingCartIcon />}
                  size="large"
                  variant="outlined"
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      )}
      {isLoading && <ProductCardSkeleton />}
    </Container>
  );
};

export default ProductContainer;
