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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import login from "../../images/login.png";
import useAuth from "../hook/useAuth";



const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, loginUser, signInWithGoogle, isLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 15 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              sx={{ width: "75%", m: 1 }}
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
              autoComplete="current-password"
            />
            <Button
              sx={{ width: "75%", m: 1, mt: 4 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                Login Successfully. Congratulation !
              </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </form>
          <p>-------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
