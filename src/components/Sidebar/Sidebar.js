import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";

const Sidebar = () => {
    const{user} = useAuthContext();
    return (

        <div className={style.sidebar}>
           <div className={style.nav}>

                   <NavLink to={"/"}> Todos </NavLink>
                   <NavLink to={"albums"}> Albums </NavLink>
                   <NavLink to={"comments"}> Comments </NavLink>
               {user && <div>
                   {user}
                   <button>LogOut</button>
               </div>}

           </div>

        </div>
    );
};
export {Sidebar};

