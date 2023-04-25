import {axiosService2} from "./axiosService";
import {requests} from "../configs";

const userService={
    getAll:()=> axiosService2.get(requests.users),
    create:(newUser)=>axiosService2.post(requests.users, newUser)
}

export {
    userService
}