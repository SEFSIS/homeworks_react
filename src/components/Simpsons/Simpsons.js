import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons=[
        {
            id:1,
            name:"Lisa",
            image:"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
        },

        {
            id:2,
            name:"Bart",
            image:"https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
        },
        {
            id:3,
            name:"Homer",
            image:"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        },

        {
            id:4,
            name:"Marge",
            image:"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"
        },

        {
            id:5,
            name:"Maggie",
            image:"https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
        },


    ]

    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};
export {Simpsons};

