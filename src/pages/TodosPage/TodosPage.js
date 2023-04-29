import React from 'react';
import style from './Todos.module.css';
import {Todos} from "../../components";


const TodosPage = () => {
    return (
        <div className={style.todos}>
            <Todos/>

        </div>
    );
};
export {TodosPage};

