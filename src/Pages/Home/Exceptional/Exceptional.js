import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import treatment from '../../../images/treatment.png';

const verticalCenter = {
  display: "flex",
  height: 400,
  alignItems: "center",
};


const Exceptional = () => {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{width:'70%', height:'100%'}} src={treatment} alt="" />
          </Grid>
          <Grid
            style={{ ...verticalCenter, textAlign: "left" }}
            item
            xs={12}
            md={4}
          >
            <Box sx={{ textAlign:'left',  mt: 15 }}>
              <Typography
                sx={{ lineHeight: '50px', mt:5, mb: 3 }}
                variant="h4"
                component="div"
              >
                Exceptional Dental Care, on Your Terms
              </Typography>
              <Typography
                sx={{ mb: 3, lineHeight: 3 }}
                variant="caption"
                display="block"
                gutterBottom
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore alias obcaecati temporibus architecto laboriosam a!
                Deleniti quibusdam aspernatur reiciendis ea assumenda voluptas
                totam esse voluptatem, sed rerum beatae dolorum atque ab animi,
                possimus natus nulla. Ipsum recusandae tenetur, voluptatibus
                cum, unde aperiam repellat temporibus repudiandae sunt est
                voluptatem! Inventore, aliquam.
              </Typography>
              <Button
                sx={{ mt: 6, backgroundColor: "#7BD1B3", color: 'white' }}
                variant="contained"
                color="primary"
              >
                {" "}
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Exceptional;