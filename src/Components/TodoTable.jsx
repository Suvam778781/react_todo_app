import { Assignment, Delete, Edit } from '@mui/icons-material'
import { Box, Button, IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"

const TodoTable = (props) => {
    const {id,title,status, description,handleOpenEditModal, handleDeleteTodo, handleAssignTodo}=props
    let role = localStorage.getItem("role");

    const {attributes,listeners,setNodeRef,transform,transition}= useSortable({id})
const style={
  transform : CSS.Transform.toString(transform),
  transition
     }

  return (
    <TableRow key={id} style={style} {...attributes} {...listeners} ref={setNodeRef}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{description}</TableCell>

                  <TableCell
                    style={{
                      color:status == 0 ? "red" : "green",
                      fontWeight: 600,
                    }}
                  >
                    {status === 0 ? "Pending" : "Completed"}
                  </TableCell>
                  <TableCell width="40%" align="center">
                    <Box display="flex" justifyContent="space-between">
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleOpenEditModal(props)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteTodo(id)}
                      >
                        <Delete />
                      </IconButton>

                      {role == "user" && (
                        <Button
                          variant="contained"
                          startIcon={<Assignment />}
                          onClick={() => handleAssignTodo(id)}
                        >
                          Assign
                        </Button>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
  )
}

export default TodoTable