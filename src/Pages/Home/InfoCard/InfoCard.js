import { Container, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import React from "react";
import { Box } from "@mui/system";

const InfoCard = () => {
  return (
   
      <Container sx={{display: 'flex', justifyContent:'center'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#76C4BE",
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                  p: 2,
                  pt: 5,
                }}
              >
                <Box>
                  <AccessTimeIcon sx={{ fontSize: 60 }}></AccessTimeIcon>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom component="div">
                    Opening Hours
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Lorem Ipsum is simply
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    dummy text of the printing
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#404255",
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                  p: 2,
                  pt: 5,
                }}
              >
                <Box>
                  <RoomIcon sx={{ fontSize: 60 }}></RoomIcon>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom component="div">
                    Visit our location
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Brooklyn, NY 10036, Unitied States
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#76C4BE",
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                  p: 2,
                  pt: 5,
                }}
              >
                <Box>
                  <PhoneInTalkIcon sx={{ fontSize: 60 }}></PhoneInTalkIcon>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom component="div">
                    Contact us now
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    *000123 456 789
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
 
  );
};

export default InfoCard;
