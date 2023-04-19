import React from 'react';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={style.notFoundPage}>
            <img src="https://internetdevels.ua/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="Error 404"/>
        </div>
    );
};
export {NotFoundPage};

