import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const UsersComponent = () => {
    const users = useSelector(state => {
        console.log(state);
        return state.userReducer;
    });

    const dispatch = useDispatch();

    useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then( value =>{
        dispatch({type:'LOAD_USERS', payload:value})
        });

    }, []);

    return (
        <div>
            <h2>Users Component</h2>
            {
                users.map(value => <div key={value.id}>{value.name}</div>)
            }
            <button onClick={ () => {
                dispatch({type:'ADD_USER', payload:{id: new Date().getMilliseconds(), name: 'Alex Ivanenko'}})
            }}> add user</button>
            <hr/>
        </div>
    );
};
export {UsersComponent};

