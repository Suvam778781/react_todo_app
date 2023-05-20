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
} from "@mui/material";
import { Assignment, Delete, Edit } from "@mui/icons-material";
import EmailModal from "./AssignUserTodoToAnathorUser.jsx";
import EditTodoModal from "./EditTodoModal";

const TodoList = ({ todos, loading, auth }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleAssignTodo = () => {};

  const handleDeleteTodo = () => {};

  return (
    <Box>
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
        }}
      >
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
            {loading ? (
              <Box
                width="100%"
                height="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress size={120} />
              </Box>
            ) : (
              todos.length > 0 &&
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
                      {auth.user && auth.user.role === "user" && (
                        <Button
                          variant="contained"
                          startIcon={<Assignment />}
                          onClick={() => handleAssignTodo()}
                        >
                          Assign
                        </Button>
                      )}
                    </Box>
                  </TableCell>
                  <EmailModal open={open} setOpen={setOpen} />
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        mar
        variant="contained"
        startIcon={<Assignment />}
        onClick={() => openAddTodoModal(true)}
      >
        Assign
      </Button>
    </Box>
  );
};

export default TodoList;
