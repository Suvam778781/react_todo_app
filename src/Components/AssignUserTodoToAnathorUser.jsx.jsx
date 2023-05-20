import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Button,
} from '@mui/material';

const EmailModal = ({ open, setOpen, handleAssignTodo }) => {
  const [userEmail, setUserEmail] = useState('');

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleAssignTodoClick = () => {
    // handleAssignTodo(userEmail);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Assign Todo</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <TextField
            label="User Email"
            value={userEmail}
            onChange={handleUserEmailChange}
            required
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAssignTodoClick} color="primary" variant="contained">
          Assign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailModal;
