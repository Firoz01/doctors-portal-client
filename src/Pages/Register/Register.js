import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import login from "../../images/login.png";
import useAuth from "../hook/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, error, registerUser, isLoading } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 15 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register Now
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                sx={{ width: "75%", m: 1 }}
                label="Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
                autoComplete="current-password"
              />
              <TextField
                id="standard-basic"
                sx={{ width: "75%", m: 1 }}
                label=" Re-Type Your Password"
                type="password"
                name="confirmPassword"
                onBlur={handleOnBlur}
                variant="standard"
                autoComplete="current-password"
              />
              <Button
                sx={{ width: "75%", m: 1, mt: 4 }}
                variant="contained"
                type="submit"
              >
                submit
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">
              User Created Successfully. Congratulation !
            </Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
