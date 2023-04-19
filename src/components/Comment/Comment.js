import React from 'react';
import style from './Button.module.css'
import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {
    const {postId, id, name,email} = comment;
    const navigate=useNavigate()
    return (
        <div className={style.comment}>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button className={style.button} onClick={()=>navigate(postId.toString())}> Post </button>

        </div>
    );
};
export {Comment};

