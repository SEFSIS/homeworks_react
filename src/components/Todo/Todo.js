import React from 'react';
import style from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId, id, title,completed} = todo;

    return (
        <div className={style.todo}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};
export {Todo};

