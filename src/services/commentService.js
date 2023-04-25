import {axiosService2} from "./axiosService";
import {requests} from "../configs";

const commentService = {
    getAll: () => axiosService2.get(requests.comments),
    create: (newComment) => axiosService2.post(requests.comments, newComment)
}

export {
    commentService
}