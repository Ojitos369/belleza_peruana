import React, { useEffect, useContext, useState } from 'react';
import { AllContext } from '../../../../../App/MyContext';

import { Paginacion } from '../Generales/Paginacion'

const Tabla = () => {
    const { Link, s, Icons, f, hp } = useContext(AllContext);
    const icons = new Icons();
    const paginacion = s?.prospectos?.paginacion;
    const registros = (paginacion?.registros || []);
    const no_paginas = paginacion?.no_paginas || 0;
    const pagina = paginacion?.pagina || 0;


    const addAll = () => {
        let new_registros = registros.map(e => {
            e.seleccionado = true;
            return e;
        })
        f.upgradeLvl2('prospectos','paginacion','registros',new_registros);
    }

    const removeAll = () => {
        let new_registros = registros.map(e => {
            e.seleccionado = false;
            return e;
        })
        f.upgradeLvl2('prospectos','paginacion','registros',new_registros);
    }

    const toggleAll = () => {
        let new_registros = registros.map(e => {
            e.seleccionado = !e.seleccionado;
            return e;
        })
        f.upgradeLvl2('prospectos','paginacion','registros',new_registros);
    }

    const cambiarPagina = (pagina) => {
        f.setLvl2('prospectos', 'stayLoad', false);
        f.upgradeLvl2('prospectos', 'paginacion', 'pagina', pagina);
    }

    const sortList = (l, k, m) => {
        // console.log(`Ordenando por ${k} en modo ${m}`)
        let new_list = l.sort((a, b) => {
            if (a[k]?.toLowerCase() < b[k]?.toLowerCase()) {
                return -1;
            }
            if (a[k]?.toLowerCase() > b[k]?.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        if (m == 'desc') {
            new_list = new_list.reverse();
        }
        return new_list;
    }

    const changeOrder = key => {
        const mode = key === s?.general?.orderList?.key ? (s?.general?.orderList?.mode === 'asc' ? 'desc' : 'asc') : 'asc';
        let new_order = {
            key: key,
            mode: mode
        }
        f.upgradeLvl1('general', 'orderList', new_order);
    }

    useEffect(() => {
        const order = sortList(registros, s?.general?.orderList?.key || 'hora_registro', s?.general?.orderList?.mode || 'desc');
        f.upgradeLvl2('prospectos', 'paginacion', 'registros', order);
    }, [s?.general?.orderList]);


    return (
        <React.Fragment>
            <div className="w-full flex content-center items-center flex-col mt-3 mb-2">
                <div className="w-11/12 flex content-start">
                    <p className="w-1/2">
                        Mostrado: { hp.showNumber(paginacion?.primer_registro_pagina) } hasta { hp.showNumber(paginacion?.ultimo_registro_pagina) }. Total registros: { hp.showNumber(paginacion?.registros_totales) }
                    </p>

                    <div className='w-1/2 flex justify-end pr-5'>
                        <button 
                            className='mr-4' onClick={addAll}
                            >
                            <span className='text-icon'>
                                {icons.addTransparent()}
                            </span>
                        </button>

                        <button 
                            className='mr-4' onClick={removeAll}
                            >
                            <span className='text-icon'>
                                {icons.removeTransparent()}
                            </span>
                        </button>

                        <button 
                            className='mr-4' onClick={toggleAll}
                            >
                            <span className='text-icon'>
                                {icons.toggleTransparent()}
                            </span>
                        </button>
                    </div>
                </div>

                <Paginacion 
                    funcion={cambiarPagina}
                    no_paginas={no_paginas}
                    pagina={pagina}
                    />

                <div className="w-11/12">
                    <div className='overflow-x overflow-x-scroll'>
                        <table className='table table-auto w-full'>
                            <thead>
                                <tr className='text-[0.8rem] font-bold'>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('fecha_asignacion')}>
                                            Fecha Registro { f.generales.validateFilter('fecha_asignacion') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('estado')}>
                                            Estado { f.generales.validateFilter('estado') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('nombre')}>
                                            Nombre { f.generales.validateFilter('nombre') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('programa_interes_desc')}>
                                            Programa Interes { f.generales.validateFilter('programa_interes_desc') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('telefono')}>
                                            Telefono { f.generales.validateFilter('telefono') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('e_mail')}>
                                            Email { f.generales.validateFilter('e_mail') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid text-left border-2 pl-1'
                                        >Whats App</th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('fecha_primer_llamada')}>
                                            Fecha Primer Incidencia { f.generales.validateFilter('fecha_primer_llamada') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('ultima_incidencia')}>
                                            Última incidencia { f.generales.validateFilter('ultima_incidencia') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('fecha_ultima_llamada')}>
                                            Última llamada { f.generales.validateFilter('fecha_ultima_llamada') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('proxima_llamada')}>
                                            Próxima llamada { f.generales.validateFilter('proxima_llamada') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid border-2 m-0 p-0'
                                        >
                                        <button className='w-full text-center bg-[#0000] whitespace-nowrap h-full min-h-[30px] px-4 border-none py-0 m-0 manita'
                                            onClick={() => changeOrder('gestor_propietario')}>
                                            Gestor { f.generales.validateFilter('gestor_propietario') }
                                        </button>
                                    </th>
                                    <th 
                                        className='border-solid text-left border-2 pl-1'
                                        >Acciones</th>
                                    <th 
                                        className='border-solid text-left border-2 pl-1'
                                        >Seleccionar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {registros.map((ele, i) => {
                                    return (<ShowElement
                                        key={i}
                                        ele={ele}
                                        index={i}
                                        Link={Link}
                                    />)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Paginacion 
                    funcion={cambiarPagina}
                    no_paginas={no_paginas}
                    pagina={pagina}
                    />
            </div>
        </React.Fragment>
    )
}


const ShowElement = ({ ele, index, Link }) => {
    const { ls, hp, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const getBgColor = ele => {
        return hp.inicidenciasColores(ele.ultima_incidencia_id);
    }

    const toggleSelect = () => {
        let elements = (s?.prospectos?.paginacion?.registros || []);
        elements[index].seleccionado = !ele.seleccionado;
        f.upgradeLvl2('prospectos', 'paginacion', 'registros', elements);
    }

    const checkThisClone = prospecto => {
        return prospecto.ultima_incidencia_id == 56 || prospecto.ultima_incidencia_id == 68;
    }

    return (
        <tr 
            className={`text-[0.75rem] ${getBgColor(ele)}`}
            >

            {/* ---------------------------------   FECHA REGISTRO   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {hp.showDate(ele.fecha_asignacion || ele.hora_registro)}
            </td>

            {/* ---------------------------------   ESTADO   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                { ele.estado ? ele.estado : ele.estado_trabajo } <br/>
                { hp.calculaHora(ele.estado) }
            </td>

            {/* ---------------------------------   NOMBRE   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                { ele.nombre } { ele.paterno } { ele.materno }
            </td>

            {/* ---------------------------------   PROGRAMA INTERES   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                { ele.programa_interes_desc }
            </td>

            {/* ---------------------------------   TELEFONO   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2 font-semibold'>
                <a href={`tel: ${ele.telefono}`}>{ ele.telefono }</a>
                <br />
                <a href={`tel: ${ele.celular}`}>{ ele.celular }</a>
            </td>

            {/* ---------------------------------   EMAIL   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2 font-semibold'>
                <a href={`mailto:${ele.e_mail}`}>{ ele.e_mail }</a>
            </td>

            {/* ---------------------------------   WHATS APP   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                <button
                    className='text-center pl-[5px]'
                    onClick={() => {
                        hp.sendWhatsapp(ele.celular ? ele.celular : ele.telefono);
                    }}>
                        <span className='text-icon'>
                            {icons.whatsApp()}
                        </span>
                </button>
            </td>

            {/* ---------------------------------   FECHA PRIMER INCIDENCIA   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {hp.showDate(ele.fecha_primer_llamada)}
            </td>

            {/* ---------------------------------   ÚLTIMA INCIDENCIA   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {ele.ultima_incidencia}
            </td>

            {/* ---------------------------------   ÚLTIMA LLAMADA   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {hp.showDate(ele.fecha_ultima_llamada)}
            </td>

            {/* ---------------------------------   PRÓXIMA LLAMADA   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {hp.showDate(ele.proxima_llamada)}
            </td>

            {/* ---------------------------------   GESTOR   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                {ele.gestor_propietario}
            </td>

            {/* ---------------------------------   ACCIONES   --------------------------------- */}
            <td className='border-solid border-2 pl-2 pr-2'>
                <div className="acciones-row">

                    {/* -------------------------   BECA   ------------------------- */}
                    <button className="accion-btn">
                        <span 
                            className='text-icon'
                            onClick={() => f.prospectos.generarBeca(ele)}
                            >
                            {icons.certificate()}
                        </span>
                    </button>
                    {/* -------------------------   /BECA   ------------------------- */}

                    {/* -------------------------   ARCHIVAR   ------------------------- */}
                    <button className="accion-btn">
                        <span 
                            className='text-icon'
                            onClick={() => f.prospectos.archivar(ele)}
                            >
                            {icons.archive()}
                        </span>
                    </button>
                    {/* -------------------------   /ARCHIVAR   ------------------------- */}

                    {/* -------------------------   LLAMADA NUEVA   ------------------------- */}
                    <Link 
                        className="accion-btn"
                        to={`/prospectos/llamada/${ele.cliente_id}`}
                        >
                        <span 
                            className='text-icon'
                            >
                            {icons.newRegister()}
                        </span>
                    </Link>
                    {/* -------------------------   /LLAMADA NUEVA   ------------------------- */}

                    {/* -------------------------   EDITAR   ------------------------- */}
                    <button className="accion-btn">
                        <span 
                            className='text-icon'
                            onClick={() => f.prospectos.editarProspecto(ele)}
                            >
                            {icons.edit()}
                        </span>
                    </button>
                    {/* -------------------------   /EDITAR   ------------------------- */}

                    {/* -------------------------   GUARDAR CONTACTO   ------------------------- */}
                    {!(ele.google_contact_id === 'S') && 
                    <button className="accion-btn">
                        <span 
                            className='text-icon'
                            onClick={() => f.prospectos.guardarContacto(ele)}
                            >
                            {icons.google()}
                        </span>
                    </button>}
                    {/* -------------------------   /GUARDAR CONTACTO   ------------------------- */}

                    {/* -------------------------   CLONAR   ------------------------- */}
                    {checkThisClone(ele) && <button className="accion-btn">
                        <span 
                            className='text-icon'
                            onClick={() => f.prospectos.clonarProspecto(ele)}
                            >
                            {icons.copy()}
                        </span>
                    </button>}
                    {/* -------------------------   /CLONAR   ------------------------- */}
                </div>
            </td>

            {/* ---------------------------------   SELECCIONAR   --------------------------------- */}
            <td 
                className='border-solid border-2 pr-2 pl-[30px]' 
                onClick={toggleSelect}
            >
                <span className='text-icon'>
                    {ele.seleccionado ? icons.userCheckedBlack() : ''}
                </span>
            </td>

        </tr>
    )
}

export { Tabla };

