import { Box, Stack, Typography } from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cartItems = [] } = useSelector((state) => state.cart);

  const totalCount = cartItems ? cartItems.length : 0;
  const price = cartItems ? parseInt(cartItems.reduce((acc, i) => acc + i.price, 0)) : 0;
  const discoutPrice = parseInt(price * 0.1);
  const total = parseInt(price - discoutPrice);
  return (
    <Box mt={4}>
      <Stack
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography color={"gray"} variant="subtitle1">
          Total Items:
        </Typography>
        <Typography variant="subtitle1">{totalCount}</Typography>
      </Stack>
      <Stack
        mt={2}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography color={"gray"} variant="subtitle1">
          Price:
        </Typography>
        <Typography variant="subtitle1">{price} Rs</Typography>
      </Stack>
      <Stack
        mt={2}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography color={"gray"} variant="subtitle1">
          Discount:
        </Typography>
        <Typography color={"green"} variant="subtitle1">
          {discoutPrice} Rs
        </Typography>
      </Stack>
      <Stack
        mt={2}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography color={"gray"} variant="subtitle1">
          Delivery Price:
        </Typography>
        <Typography color={"green"} variant="subtitle1">
          Free
        </Typography>
      </Stack>
      <Stack
        mt={2}
        sx={{ borderTop: "1px dashed gray", borderBottom: "1px dashed gray" }}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
        py={2}
      >
        <Typography color={"gray"} variant="h5">
          Total Amount:
        </Typography>
        <Typography variant="h5">{total} Rs</Typography>
      </Stack>
      <Stack
        mt={2}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography fontWeight={'bold'} color={"green"} variant="subtitle1">
          You saved {discoutPrice+200} Rs on this order
        </Typography>
      </Stack>
    </Box>
  );
};
export default CartSummary;
