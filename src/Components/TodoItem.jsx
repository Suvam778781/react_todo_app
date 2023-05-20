import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  IconButton,
  Box,
  Button,
  LinearProgress,
} from "@mui/material";
import { Assignment, Delete, Edit } from "@mui/icons-material";
import EmailModal from "./AssignUserTodoToAnathorUser.jsx";
import EditTodoModal from "./EditTodoModal";
import AddTodoModal from "./AddTodoModal.jsx";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../HOF/TodoReducer/todo.action.js";

const TodoList = ({ todos, loading, auth }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  let role = localStorage.getItem("role") || "client";
  const handleAssignTodo = () => {};

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Box>
      <Typography fontSize={"70px"} color={"grey"} margin={"22px"}>
        {role} Table
      </Typography>
      <TableContainer
        style={{
          height: "400px",
          maxWidth: 800,
          margin: "auto",
          marginTop: "140px",
          p: 4,
          border: "2px solid",
          borderColor: "#00d5fa",
          borderRadius: "7px",
          overflowY: "scroll",
        }}
      >
        {loading && <LinearProgress />}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <TableRow key={todo.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{todo.description}</TableCell>
                  <TableCell>
                    {todo.status === 0 ? "Pending" : "Completed"}
                  </TableCell>
                  <TableCell width="40%" align="center">
                    <Box display="flex" justifyContent="space-between">
                      <IconButton
                        aria-label="edit"
                        onClick={() => setOpenEditModal(true)}
                      >
                        <Edit />
                      </IconButton>
                      <EditTodoModal
                        setOpenEditModal={setOpenEditModal}
                        openEditModal={openEditModal}
                        todo={todo}
                      />
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        <Delete />
                      </IconButton>
                      {
                        <Button
                          variant="contained"
                          startIcon={<Assignment />}
                          onClick={() => handleAssignTodo()}
                        >
                          Assign
                        </Button>
                      }
                    </Box>
                  </TableCell>
                  <EmailModal open={open} setOpen={setOpen} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        startIcon={<Assignment />}
        onClick={() => setOpenAddTodoModal(true)}
      >
        ADD TODO
      </Button>
      <AddTodoModal
        setOpenAddTodoModal={setOpenAddTodoModal}
        openAddTodoModal={openAddTodoModal}
      />
    </Box>
  );
};
export default TodoList;
