import { Box, IconButton, Button, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";


const CartItem = (props) => {
  const { item, setToast } = props;
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const { image, title, price, id } = item || {};

  const onRemoveFromCart = () => {
    setToast({
      message: "An item removed from Cart",
      type: "info",
    });
    dispatch(removeFromCart(id));
  };
  const onAddQuantity = () => {
    if (count <= 4) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const onMinusQuantity = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box p={2} border={1} borderRadius={2} borderColor="gray">
      <Stack gap={4} flexDirection={{ md: "row", xs: "column" }}>
        <Box height={200} width={150} m={{ md: 0, xs: "auto" }}>
          <img height={"100%"} width={"100%"} src={image} alt={title} />
        </Box>
        <Stack>
          <Typography variant="h6">{title}</Typography>
          <Typography my={2} fontWeight={700} color="green" variant="h6">
            Rs. {price}
          </Typography>
          <Stack mt={"auto"} gap={4} flexDirection={"row"}>
            <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
              <IconButton
                disabled={count <= 1}
                size="small"
                onClick={onMinusQuantity}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography fontWeight={"bold"} border={1} px={2}>
                {count}
              </Typography>
              <IconButton
                disabled={count >= 4}
                size="small"
                onClick={onAddQuantity}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Stack>
            <Button
              startIcon={<ShoppingCartIcon />}
              size="small"
              variant="text"
              onClick={onRemoveFromCart}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartItem;
