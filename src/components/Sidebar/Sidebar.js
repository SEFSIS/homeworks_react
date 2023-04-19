import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (

        <div className={style.sidebar}>
           <div className={style.nav}>

                   <NavLink to={"/"}> Todos </NavLink>
                   <NavLink to={"albums"}> Albums </NavLink>
                   <NavLink to={"comments"}> Comments </NavLink>

           </div>

        </div>
    );
};
export {Sidebar};

