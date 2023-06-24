import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Header from "../../components/Header";
import { CircularProgress } from "@mui/material";
import { login } from "../../actions/authActions";
import Toast from "../../components/toast";
import { useNavigate } from "react-router-dom";
import { formValidation } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { setLoggedinToken } from "../../redux/actions/authActions";
import { useRef } from "react";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    password: "",
    apiStatus: "",
    errors: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((curr) => ({ ...curr, errors: null }));
    // validation
    const { username, password } = state;

    const { isValidated, errors } = formValidation(state);
    if (isValidated) {
      const data = {
        username,
        password,
      };
      setState((curr) => ({ ...curr, apiStatus: "loading" }));
      login(data)
        .then(({ data }) => {
          if (data && data.token) {
            dispatch(setLoggedinToken(data.token))
            navigate("/", {
              replace: true,
            });
            return
          }
          throw new Error("token not available");
        })
        .catch((err) => {
          console.log(err.response.status);
          const status = err.response.status;
          setState((curr) => ({ ...curr, password: "", apiStatus: "error" }));
          if (status === 401) {
            console.log("User is not valid");
          }
        });
    } else {
      setState((curr) => ({ ...curr, errors: errors }));
    }
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setState((curr) => ({
      ...curr,
      [name]: value,
    }));
  };
  const onCloseToast = () => {
    setState((curr) => ({ ...curr, apiStatus: "" }));
  };


  const isLoading = state.apiStatus === "loading";
  const error = state.apiStatus === "error";
  const errors = state.errors;
  return (
    <div>
      <Header showHome={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={Boolean(errors && errors.usernameError)}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={state.username}
              disabled={isLoading}
              onChange={onChangeInput}
              helperText={errors && errors.usernameError}
            />
            <TextField
              error={Boolean(errors && errors.passwordError)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              disabled={isLoading}
              autoComplete="current-password"
              value={state.password}
              onChange={onChangeInput}
              helperText={errors && errors.passwordError}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sigin {isLoading && <CircularProgress sx={{ ml: 2 }} size={20} />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {error && (
          <Toast
            message={"User is not Valid"}
            open={error}
            type="error"
            onClose={onCloseToast}
          />
        )}
      </Container>
    </div>
  );
};

export default SignIn;
