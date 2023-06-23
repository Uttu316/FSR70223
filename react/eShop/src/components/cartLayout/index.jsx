import { Container, Box } from "@mui/material";
import React from "react";

const CartLayout = (props) => {
  const { children } = props;

  return (
    <Container maxWidth="xl">
      <Box py={4} mx={2}>
        {children}
      </Box>
    </Container>
  );
};

export default CartLayout;
