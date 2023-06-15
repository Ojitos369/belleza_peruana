import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { Table } from './Table';

function Cart() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full'>
                <h2 className='w-full text-center mt-4 text-2xl font-bold'>
                    Carrito de Compras
                </h2>

                <Table />

            </div>
        </Fragment>
    )
}

export { Cart };
