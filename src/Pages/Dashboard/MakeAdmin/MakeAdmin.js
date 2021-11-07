import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../hook/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://pure-island-36820.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);

          setSuccess(true);
        }
      });

    e.preventDefault(); // prevent default form submit
  };

  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained" color="primary">
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">
          Made Admin Successfully. Congratulation !
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
