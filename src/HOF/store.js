'use client';
import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/auth.reducer"

const rootreducer = combineReducers({authReducer});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));


export { store };
