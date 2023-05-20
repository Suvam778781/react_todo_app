import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/utils/redux-arch/todoreducer/action';
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

const AddTodoModal = ({ openAddTodoModal, setOpenAddTodoModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
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

  const handleAddTodo = () => {
    const newTodo = {
      title,
      description,
      status,
    };
    dispatch(addTodo(newTodo));
    onClose();
  };

  return (
    <Dialog open={openAddTodoModal} onClose={()=>setOpenAddTodoModal(false)}>
      <DialogTitle>Add Todo</DialogTitle>
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
        <Button onClick={()=>setOpenAddTodoModal(false)}>Cancel</Button>
        <Button onClick={handleAddTodo} color="primary" variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoModal;
