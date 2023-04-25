import React from 'react';
import {User} from "../User/User";
import style from'./Users.module.css'

const Users = ({users}) => {

    return (
        <div className={style.users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};
export {Users};

