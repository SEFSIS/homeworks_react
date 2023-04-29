import React, {useContext} from 'react';
import style from './Comments.module.css';
import {Comments} from "../../components";
import {MyContext} from "../../index";


const CommentsPage = () => {
   const context = useContext(MyContext);
   context.gender = 'male'
    Object.assign(context, {status: true})
    delete context.name
    return (
        <div className={style.comments}>

          <Comments/>

        </div>
    );
};
export {CommentsPage};

