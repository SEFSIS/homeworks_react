import React from 'react';
import style from './Albums.module.css';
import {Albums} from "../../components";


const AlbumsPage = () => {
    return (
        <div className={style.albums}>
            <Albums/>
        </div>
    );
};
export {AlbumsPage};

