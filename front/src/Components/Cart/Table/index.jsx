import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../../App/MyContext';

const ShowElement = (props) => {
    const { ele, index, tdClass } = props;
    ele.index = index;
    const item = ele.item || {};

    return (
        <tr className={`text-[0.75rem] ${index % 2 === 0 ? 'bg-[#0000]' : 'bg-[#8884]'} hover:bg-[#888]`}>
            {/* ---------------------   Titulo   --------------------- */}
            <td className={`${tdClass}`}>
                {item.titulo}
            </td>
            {/* ---------------------   /Titulo   --------------------- */}

            {/* ---------------------   Cantidad   --------------------- */}
            <td className={`${tdClass}`}>
                {ele.cantidad}
            </td>
            {/* ---------------------   /Cantidad   --------------------- */}
        </tr>
    )
}

const Table = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    const registros = s.compras?.itemsAgregados || [];
    console.log('registros', registros);

    const trClass = 'trClass text-[0.8rem] font-bold bg-[var(--my-edilar)] text-[var(--my-white)]';
    const thClass = 'thClass border-solid border-2 m-0 py-2 px-2 border border-[var(--my-minor)]';
    const tdClass = 'tdClass border-solid border-2 whitespace-nowrap py-2 px-4 border border-[var(--my-edilar)]';

    return (
        <Fragment>
            <div className="w-11/12 table-container">
                <div className='overflow-x overflow-x-scroll table-div'>
                    <table className='table table-auto border-collapse border rounded-2xl w-full mt-2 mb-2'>
                        <thead>
                            <tr className={`${trClass}`}>
                                {/* ---------------------   Item   --------------------- */}
                                <th className={`${thClass}`}>
                                    Item
                                </th>
                                {/* ---------------------   /Item   --------------------- */}
                                {/* ---------------------   Cantidad   --------------------- */}
                                <th className={`${thClass}`}>
                                    Cantidad
                                </th>
                                {/* ---------------------   /Cantidad   --------------------- */}
                            </tr>
                        </thead>

                        <tbody>
                            {registros.map((ele, i) => {
                                return (<ShowElement
                                    key={i}
                                    ele={ele}
                                    index={i}
                                    tdClass={tdClass}
                                    f={f}
                                />)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export { Table };
