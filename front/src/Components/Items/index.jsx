import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import img1 from '../../static/img/img1.jpg';
import './style/index.css';

function Items() {
    const { ls, hp, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const productos = s.listaProductos?.mostrar || [];

    useEffect(() => {
        f.productos.getProductos();
    }, []);

    return (
        <Fragment>
            <div 
                className="flex flex-wrap w-full md:justify-start justify-around px-4 md:px-0 md:pl-8 mt-2"
                >
            {productos.map((ele, index) => {
                return (
                    <Item
                        key={index}
                        ele={ele}
                        hp={hp}
                    />
                )
            })}
            </div>

        </Fragment>
    )
}

const Item = (props) => {
    const { ele, hp } = props;
    return (
        <div className="item-container flex justify-center flex-wrap mt-8 md:ml-12 ml-1">
            <div 
                className="fondo"
                style={{backgroundImage: `url(${ele.photo})`}}
                >
                    <div className="sombra"></div>
                </div>
            <img
                className='img-item' 
                src={ele.photo} 
                alt={ele.name}/>
            <h4 className='flex w-10/12 justify-between flex-wrap'
                >
                <span className='w-full text-start title'>
                    {ele.name}
                </span>
                <span className='w-10/12 text-end cost'>
                    {hp.showCurrency(ele.price)}
                </span>
            </h4>
            <button>
                Agregar al carrito
            </button>

        </div>
    )
}

export { Items };
