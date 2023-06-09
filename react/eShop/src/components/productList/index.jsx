import { Container, Stack } from "@mui/system";
import React from "react";
import ProductCard from "../productCards";

const ProductList = () => {
  return (
    <Container>
      <Stack my={6} gap={4} flexWrap={'wrap'} direction='row'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
    </Container>
  );
};

export default ProductList;
