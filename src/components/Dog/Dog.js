import React from 'react';
import css from './Dog.module.css'

const Dog = ({dog,dispatch}) => {
    const {id,name} = dog;
    return (
        <div className={css.dog}>
            <div >{id} {name}</div>
            <button onClick={()=>dispatch({type:'DELETE_DOG',payload:id})}>DELETE</button>
        </div>
    );
};
export {Dog};

