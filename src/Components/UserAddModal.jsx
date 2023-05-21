import React, { useState } from "react";
import { Box, Button, FormControl, TextField,LinearProgress,Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../HOF/UserReducer/user.action";
const UserAddModal = ({ setstate }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const users = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addUser(user));
    setstate(1);
  };

  const validateForm = () => {
    return user.email.length > 0 && user.password.length > 0;
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: "2vh",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: 8,
        padding: 4,
        backgroundColor: "#ccf7fe",
      }}
    >
          {users.loading && <LinearProgress />}
      <Typography variant="h4" align="center" mb={4}>
        Add User
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <TextField
            id="firstname"
            label="First Name"
            type="text"
            value={user.firstname}
            onChange={handleChange}
            sx={{ backgroundColor: "#FFFFFF" }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            id="lastname"
            label="Last Name"
            type="text"
            value={user.lastname}
            onChange={handleChange}
            sx={{ backgroundColor: "#FFFFFF" }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            id="email"
            label="Email"
            type="email"
            value={user.email}
            onChange={handleChange}
            sx={{ backgroundColor: "#FFFFFF" }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            id="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
            sx={{ backgroundColor: "#FFFFFF" }}
            required
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!validateForm()}
        >
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default UserAddModal;
