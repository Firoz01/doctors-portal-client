import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAuth from "../../hook/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  open,
  handleClose,
  booking,
  price,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toDateString(),
    };

    fetch("https://pure-island-36820.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookingSuccess(true);
        handleClose();
      });
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onClick={handleBookingSubmit}>
                <TextField
                  disabled
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue={time}
                  size="small"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="patientName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  size="small"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  size="small"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="phone"
                  onBlur={handleOnBlur}
                  defaultValue="Your Phone Number"
                  size="small"
                />
                <TextField
                  disabled
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue={date.toDateString()}
                  size="small"
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
