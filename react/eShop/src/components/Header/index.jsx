import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import UserAvatar from "./userAvatar";

const Header = ({ showLogin, showHome }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const showCart = isLoggedIn;
  const onLogin = () => {
    navigate("/signin");
  };
  const onHome = () => {
    navigate("/");
  };
  const onCart = () => {
    navigate("/cart");
  };

  const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eShop
          </Typography>

          {showLogin && !isLoggedIn && (
            <IconButton size="large" color="inherit" onClick={onLogin}>
              <AccountCircleIcon />
            </IconButton>
          )}
          {showHome && (
            <IconButton size="large" color="inherit" onClick={onHome}>
              <HomeIcon />
            </IconButton>
          )}
          {showCart && (
            <IconButton size="large" color="inherit" onClick={onCart}>
              <Badge badgeContent={cartCount} showZero={false} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
          {isLoggedIn && <UserAvatar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
