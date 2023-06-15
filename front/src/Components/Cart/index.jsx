import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { Table } from './Table';

function Cart() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full'>
                <p
                    className='text-2xl font-bold text-center w-full mt-4'
                    >
                    Carrito de Compras
                </p>
                <Table />
            </div>
        </Fragment>
    )
}

export { Cart };
