import { Card, Stack, Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import CartLayout from "../../components/cartLayout";
import CartItem from "../../components/cartLayout/cartCard";
import CartSummary from "../../components/cartLayout/cartSummary";
import Header from "../../components/Header";
import PlaceOrderBtn from "../../components/placeOrderBtn";
import Toast from "../../components/toast";

const Cart = () => {
  const [toast, setToast] = useState(null);
  const { cartItems = [] } = useSelector((state) => state.cart);
  const onCloseToast = useCallback(() => {
    setToast(null);
  },[]);
  return (
    <div style={{ background: "#f1f3f6", minHeight: "100vh" }}>
      <Header showCart={false} showHome={true} />
      <CartLayout>
        <Grid flexDirection={{ lg: "row", xs: "column" }} gap={4} container>
          <Grid item lg={7}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h5" component={"h1"} color="burlywood">
                Cart Items
              </Typography>
              <Stack gap={4} mt={4}>
                {cartItems &&
                  cartItems.map((item) => (
                    <CartItem setToast={setToast} item={item} key={item.id} />
                  ))}
              </Stack>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h5" component={"h1"} color="gray">
                Cart Summary
              </Typography>
              <CartSummary />
            </Card>
            <Box mt={4}>
              <PlaceOrderBtn />
            </Box>
          </Grid>
        </Grid>
      </CartLayout>
      {toast && (
        <Toast
          message={toast.message}
          open={toast}
          type={toast.type}
          onClose={onCloseToast}
        />
      )}
    </div>
  );
};

export default Cart;
