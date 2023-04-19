import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import style from './Comments.module.css'
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])
    return (
        <div className={style.comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export {Comments};

