import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const UserForm = ({setUsers}) => {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all',resolver:joiResolver(userValidator)});




    return (
        <div>

        </div>
    );
};
export {UserForm};

