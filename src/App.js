import React, {useReducer, useRef, useState} from 'react';
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

import {Cats} from "./components/Cats/Cats";
import {Dogs} from "./components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastC] = state.cats.slice(-1);
            const id = lastC ? lastC.id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.payload}]}
        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload)
            state.cats.splice(index, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastD] = state.dogs.slice(-1);
            const idD = lastD ? lastD.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: idD, name: action.payload}]}
        case 'DELETE_DOG':
            const indexD = state.dogs.findIndex(dog => dog.id === action.payload)
            state.dogs.splice(indexD, 1)
            return {...state}
        default:
            return {...state}
    }
}


const App = () => {
    // const [flag, setFlag] = useState(true);

    const catInp = useRef();
    const dogInp = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data)


    const createCat = () => {
        dispatch({type: 'ADD_CAT', payload: catInp.current.value})
        catInp.current.value = ''
    }

    const createDog = () => {
        dispatch({type: 'ADD_DOG', payload: dogInp.current.value})
        dogInp.current.value = ''
    }
    return (
        <div>
            <>
                {/* {flag && <Posts/>}*/}
                {/* <button onClick={() => setFlag(prevState => !prevState)}>hide</button>*/}
                {/*<Comments/>*/}
            </>

            <div>
                <input type="text" ref={catInp}/>
                <button onClick={createCat}>Create Cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>

            </div>

            <div>
                <input type="text" ref={dogInp}/>
                <button onClick={createDog}>Create Dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>


        </div>
    );
};
export {App};



