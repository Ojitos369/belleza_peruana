import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import img1 from '../../static/img/img1.jpg';
import './style/index.css';

function Items() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);

    const icons = new Icons();
    return (
        <Fragment>
            <div 
                className="flex flex-wrap w-full justify-start  pl-8"
                >
            <Item 
                img={img1}
                name='Nombre del producto'
                price='$ 100.00'
                descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                />
            </div>

        </Fragment>
    )
}

const Item = (props) => {
    return (
        <div className="item-container flex justify-center flex-wrap mt-4">
            <div 
                className="fondo"
                style={{backgroundImage: `url(${props.img})`}}
                >
                    <div className="sombra"></div>
                </div>
            <img
                className='img-item' 
                src={props.img} 
                alt={props.img}/>
            <h4 className='flex w-10/12 justify-between flex-wrap'
                >
                <span className='w-full text-start title'>
                    {props.name}
                </span>
                <span className='w-10/12 text-end cost'>
                    {props.price}
                </span>
            </h4>
            <button>
                Agregar al carrito
            </button>

        </div>
    )
}

export { Items };
