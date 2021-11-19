import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const handleAddDoctorSubmit = (e) => {
    e.preventDefault();
    if(!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess('Doctor added successfully"');
        }
      });
    
  };
  
  return (
    <div>
      <h3>Add Doctor</h3>
      <form onSubmit={handleAddDoctorSubmit}>
        <TextField
          sx={{ width: "50%" }}
          required
          label="Name"
          type="text"
          variant="standard"
          onBlur={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          required
          label="Email"
          type="email"
          variant="standard"
          onBlur={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" onChange={ e => setImage(e.target.files[0])}/>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{color:'green'}}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
