import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { AddCantidadModal } from '../Modals/compra/AddCantidadModal';

import './style/index.css';

function Items() {
    const { ls, hp, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const productos = s.listaProductos?.mostrar || [];

    useEffect(() => {
        f.articulos.getProductos();
    }, []);

    return (
        <Fragment>
            <div 
                className="flex flex-wrap w-full justify-around px-4 md:px-0 md:pl-8 mt-2"
                >
            {productos.map((ele, index) => {
                return (
                    <Item
                        key={index}
                        ele={ele}
                        hp={hp}
                        f={f}
                    />
                )
            })}
            </div>
            {s.modals?.compras?.addCantidad &&
            <AddCantidadModal />
            }

        </Fragment>
    )
}

const Item = (props) => {
    const { ele, hp, f } = props;
    const addToCart = () => {
        f.upgradeLvl2('compras', 'agregando', 'item', ele);
        f.upgradeLvl2('compras', 'agregando', 'amount', 1);
        f.upgradeLvl2('modals', 'compras', 'addCantidad', true);
    }
    return (
        <div className="flex justify-center flex-wrap mt-8 px-8">
            <div className="item-container flex justify-center flex-wrap">
                <div 
                    className="fondo"
                    style={{backgroundImage: `url(${ele.url})`}}
                    >
                        <div className="sombra"></div>
                    </div>
                <img
                    className='img-item' 
                    src={ele.url} 
                    alt={ele.titulo}/>
                <h4 className='flex w-10/12 justify-between flex-wrap'
                    >
                    <span className='w-full text-start title'>
                        {ele.titulo}
                    </span>
                    <span className='w-10/12 text-end cost'>
                        {hp.showCurrency(ele.precio)}
                    </span>
                </h4>
                <button
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>

            </div>
        </div>
    )
}

export { Items };
