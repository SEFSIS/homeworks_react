import React, {useState} from 'react';
import {Posts} from "./components/Posts/Posts";
import {Launches} from "./components/Launches/Launches";
import {Users} from "./components/Users/Users";
import {UserPosts} from "./components/UserPosts/UserPosts";

const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Launches/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId} />}
        </div>
    );
};
export {App};



