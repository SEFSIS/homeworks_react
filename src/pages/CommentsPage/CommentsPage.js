import React from 'react';
import style from './Comments.module.css';
import {Comments} from "../../components";


const CommentsPage = () => {
    return (
        <div className={style.comments}>

          <Comments/>

        </div>
    );
};
export {CommentsPage};

