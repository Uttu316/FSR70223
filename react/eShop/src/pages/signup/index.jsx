import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Header from "../../components/Header";
import { Checkbox, CircularProgress, FormControlLabel } from "@mui/material";
import { login } from "../../actions/authActions";
import Toast from "../../components/toast";
import { useNavigate } from "react-router-dom";
import { formValidation } from "../../utils/validation";


const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
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
          navigate("/", {
            replace: true,
          });
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
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 4 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone number"
                  name="phone"
                  autoComplete="mobile"
                />
              </Grid>
            </Grid>
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
              value={state.password}
              onChange={onChangeInput}
              helperText={errors && errors.passwordError}
            />
            <TextField
              error={Boolean(errors && errors.confirmPasswordError)}
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              disabled={isLoading}
              value={state.confirmPassword}
              onChange={onChangeInput}
              helperText={errors && errors.confirmPasswordError}
            />
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I agree with terms & conditions."
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Signup{" "}
              {isLoading && <CircularProgress sx={{ ml: 2 }} size={20} />}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/sigin" variant="body2">
                  {"Already have an account? Sign In"}
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

export default SignUp;
