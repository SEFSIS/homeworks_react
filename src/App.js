import React, {useEffect, useState} from 'react';
import {CarForm, Cars, CommentForm, Comments, UserForm, Users} from "./components";
import {carService, commentService, userService} from "./services";

const App = () => {
    // const [cars, setCars] = useState([]);
    // const [updateCar, setUpdateCar] = useState(null);

    // useEffect(() => {
    //     carService.getAll().then(({data}) => setCars([...data]))
    // }, []);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, [])
    return (
        <div>
            {/*<CarForm setCars={setCars} updateCar={updateCar}/>*/}
            {/*<hr/>*/}
            {/*<Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>*/}

            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>

        </div>
    );
};
export {App};



