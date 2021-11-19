import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 18,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    price: 19,
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    price: 17,
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    price: 15,
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    price: 22,
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    price: 25,
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const AvaiableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Avaiable Appointments {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success">Appointment book Successfully. Congratulation !</Alert>}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvaiableAppointments;
