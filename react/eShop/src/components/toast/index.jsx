import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
import React from "react";
import proptypes from "prop-types";



const Toast = ({ open, onClose, message, type } ) => {
  return (
    <Snackbar open={open} autoHideDuration={1500} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};


Toast.propTypes = {
  open: proptypes.bool.isRequired,
  onClose:proptypes.func,
  message:proptypes.string,
  type:proptypes.string
};

export default Toast