import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from "../../images/login.png";

const Register = () => {
     const [loginData, setLoginData] = useState({});

     const handleOnChange = (e) => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = { ...loginData, [field]: value };
       setLoginData(newLoginData);
     };
     
    const handleLoginSubmit = (e) => {
        if (loginData.password === loginData.confirmPassword) {
                         alert("Registration Successful");
        } else {
            alert("Password and Confirm Password do not match");
            return;
        }
       e.preventDefault();
     };
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Register Now
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                sx={{ width: "75%", m: 1 }}
                label="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
                autoComplete="current-password"
              />
              <TextField
                id="standard-basic"
                sx={{ width: "75%", m: 1 }}
                label=" Re-Type Your Password"
                type="password"
                name="confirmPassword"
                onChange={handleOnChange}
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
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;