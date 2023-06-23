import { Button } from "@mui/material";
import React from "react";

const PlaceOrderBtn = () => {
  const onPlaceOrder = () => {
    //
  };
  return (
    <Button
      sx={{ width: "100%", p: 2, background: "#fb641b", fontWeight: "bold" }}
      size="large"
      variant="contained"
      onClick={onPlaceOrder}
    >
      Place Order
    </Button>
  );
};

export default PlaceOrderBtn;
