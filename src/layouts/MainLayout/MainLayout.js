import React from 'react';
import {Outlet} from "react-router-dom";
import {Sidebar} from "../../components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet/>

        </div>
    );
};
export {MainLayout};

