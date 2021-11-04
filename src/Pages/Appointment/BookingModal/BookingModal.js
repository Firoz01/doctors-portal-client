import React from 'react';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

const BookingModal = ({open, handleClose, booking, date}) => {
    
  const { name, time } = booking;

  const handleBookingSubmit = (e) => {


    

    handleClose();
    e.preventDefault();
    console.log(booking);
  }

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
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
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
                    defaultValue="Your Name"
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    defaultValue="Your Email"
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
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