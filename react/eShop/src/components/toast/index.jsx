import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
import React from "react";

const Toast = ({ open, onClose, message, type } ) => {
  return (
    <Snackbar open={open} autoHideDuration={1500} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast