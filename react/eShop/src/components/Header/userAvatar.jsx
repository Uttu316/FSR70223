import {
  Tooltip,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
import avatar from "../../assets/avatar.png";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

class UserAvatar extends PureComponent {
  constructor() {
    super();
    this.state = {
      menuOpen: null,
    };
  }
  handleOpenUserMenu = (e) => {
    this.setState({ menuOpen: e.currentTarget });
  };
  handleCloseUserMenu = () => {
    this.setState({ menuOpen: null });
  };
  onLogout = () => {
    const { dispatch } = this.props;
    dispatch(logout());
    this.handleCloseUserMenu();
  };

  render() {
    const { isLoggedin } = this.props;
    console.log(isLoggedin);
    return (
      <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
        <Tooltip title="Hello">
          <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Avatar" src={avatar} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={this.state.menuOpen}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(this.state.menuOpen)}
          onClose={this.handleCloseUserMenu}
        >
          <MenuItem onClick={this.handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <Option label={"Dashboard"} navigateTo={"/dashboard"} />
          <Option onClick={this.onLogout} label={"Logout"} />
        </Menu>
      </Box>
    );
  }
}
const Option = ({ onClick, label, navigateTo }) => {
  const navigate = useNavigate();

  const onClickItem = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else {
      onClick && onClick();
    }
  };
  return (
    <MenuItem onClick={onClickItem}>
      <Typography textAlign="center">{label}</Typography>
    </MenuItem>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.isLoggedin,
  };
};

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         logoutUser:()=> dispatch(logout())
//     }
// }

export default connect(mapStateToProps)(UserAvatar);

// export default connect(mapStateToProps,mapDispatchToProps)(UserAvatar);
