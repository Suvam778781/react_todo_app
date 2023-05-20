'use client';
import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";

const rootreducer = combineReducers({authReducer:authReducer});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));


export { store };
