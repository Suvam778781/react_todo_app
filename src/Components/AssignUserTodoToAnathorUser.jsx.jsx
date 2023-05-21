import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import AsminAssignTodo from "./AdminTodoAssign";

const EmailModal = ({ open, setOpen, handleAssignTodo }) => {
  const [userEmail, setUserEmail] = useState("");
  const [text, setText] = useState("");

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleAssignTodoClick = () => {
    // handleAssignTodo(userEmail);
    //setOpen(false);
    console.log(text);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryHandeler = useCallback((val) => {
    setText(val);
    console.log(text);
  }, [text]);


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Assign Todo</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <AsminAssignTodo queryHandeler={queryHandeler} />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleAssignTodoClick}
          color="primary"
          variant="contained"
        >
          Assign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailModal;
