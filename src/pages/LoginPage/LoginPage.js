import React, {useRef} from 'react';
import css from './Login.module.css'
import {useAuthContext} from "../../components/hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const username = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();


    const login = () => {

        logIn(username.current.value)
        navigate(state.pathname, {replace: true})

    }

    return (
        <div className={css.Login}>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};
export {LoginPage};

