import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { updateTodo } from '../HOF/TodoReducer/todo.action';

const EditTodoModal = ({ openEditModal, setOpenEditModal, todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = {
      id: todo.id,
      title,
      description,
      status,
    };


    dispatch(updateTodo(updatedTodo.id, updatedTodo));
    setOpenEditModal(false)
  };

const handleClose=()=>{

    setOpenEditModal(false)

}

  return (
    <Dialog open={openEditModal} onClose={handleClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select value={status} onChange={handleStatusChange} required>
            <MenuItem value={0}>Pending</MenuItem>
            <MenuItem value={1}>Completed</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdateTodo} color="primary" variant="contained">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoModal;
