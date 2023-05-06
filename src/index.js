import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


let initUserState = [];
let userReducer = (state = initUserState,action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.payload];
        case 'ADD_USER':
            state.push(action.payload)
            return [...state]
    }

    return state;
};

const initPostState = [];

const postReducer = (state = initPostState,action) => {
    switch (action.type){
        case 'LOAD_POSTS':
            return[...action.payload];
    }
    return state
}

let store = createStore(combineReducers({
    userReducer, postReducer
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);


