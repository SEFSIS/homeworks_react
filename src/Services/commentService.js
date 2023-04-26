import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

class CommentService{
    getAll(){
        return axiosService.get(urls.comments)
    }
}

export const commentService = new CommentService()