import {useParams} from "react-router-dom";

import {useEffect, useState} from "react";

import {postService} from "../../services";
import style from './Post.module.css'


const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])

    return (
        <div className={style.post} >
            {post&&(
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export {Post};
