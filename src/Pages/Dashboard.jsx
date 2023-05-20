import React, { useEffect, useState } from 'react'
import { fetchTodos } from '../HOF/TodoReducer/todo.action';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../Components/TodoItem';

const Dashboard = () => {
    const[page,setpage]=useState(1)
    const todo = useSelector((store) => store.todoReducer); // Selecting the todo state from the Redux store
    const auth = useSelector((store) => store.authReducer); // Selecting the authentication state from the Redux store
    const dispatch = useDispatch();
    console.log(todo) // Creating a dispatch function for Redux actions
    useEffect(() => {
      dispatch(fetchTodos(page)); // Fetching todos when the page changes
    }, [page]);

  return (
    <div>
<TodoList todos={todo} loading={todo.loading} auth={auth}/>
    </div>
  )
}

export default Dashboard
