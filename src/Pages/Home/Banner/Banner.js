import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container } from "@mui/material";
import InfoCard from "../InfoCard/InfoCard";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  height: 400,
  alignItems: "center",
};

const Banner = () => {
  return (
    <>
      <Container
        style={bannerBg}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: "left" }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br /> Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptas, tenetur atque labore cupiditate sit natus voluptatum
                delectus mollitia dolores!
              </Typography>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "#5CE7ED" }}
              >
                GET APPOINTMENT
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
      <InfoCard></InfoCard>
    </>
  );
};

export default Banner;
