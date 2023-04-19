import React from 'react';

const Simpson = ({simpson}) => {
    let {id, name, image} = simpson
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};
export {Simpson};

