import React from 'react';
import css from './Cat.module.css'

const Cat = ({cat,dispatch}) => {
    const {id,name} = cat;
    return (
        <div>

            <div className={css.cat}>{id} {name}</div>
            <button onClick={()=>dispatch({type:'DELETE_CAT',payload:id})}>DELETE</button>
        </div>
    );
};
export {Cat};

