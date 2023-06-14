import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Header = ({ showLogin, showHome }) => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/signin");
  };
  const onHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eShop
          </Typography>

          {showLogin && (
            <IconButton size="large" color="inherit" onClick={onLogin}>
              <AccountCircleIcon />
            </IconButton>
          )}
          {showHome && (
            <IconButton size="large" color="inherit" onClick={onHome}>
              <HomeIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
