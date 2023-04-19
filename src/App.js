import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, NotFoundPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {Post} from "./components/Post/Post";
import {PostPage} from "./pages/PostPage/PostPage";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'comments/:postId'} element={<PostPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>


            </Routes>
        </div>

    );
};
export {App};



