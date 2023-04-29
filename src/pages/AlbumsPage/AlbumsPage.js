import React, {useContext} from 'react';
import style from './Albums.module.css';
import {Albums} from "../../components";
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";




const AlbumsPage = () => {
    let context = useContext(MyContext);

    return (
        <div className={style.albums}>
            {/*<Albums/>*/}
            {JSON.stringify(context)}
            <Button click={()=>console.log('Click from Custom Button!!!!!')} style={{backgroundColor:'yellow'}}>Click</Button>


        </div>
    );
};
export {AlbumsPage};

