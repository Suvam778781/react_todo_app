'use client';
import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { todoReducer } from "./TodoReducer/todo.reducer";

const rootreducer = combineReducers({authReducer:authReducer,todoReducer:todoReducer});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));


export { store };
