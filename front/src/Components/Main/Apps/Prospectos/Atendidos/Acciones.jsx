import React from 'react';
import { AllContext } from '../../../../../App/MyContext';

const Acciones = () => {
    const { ls, lf, s, f, Icons, MySwal } = React.useContext(AllContext);
    const icons = new Icons();

    const accion = s?.prospectos?.acciones?.opcion || '';
    const accionesElegidos = () => {
        if (!!accion) {
            f.prospectos.realizarAccion(accion);
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Opcion invalida',
                text: 'Opcion invalida, seleccion alguna opcion',
            });
        }

    }

    return (
        <React.Fragment>
            <div className="flex w-full content mt-5">
                <div className="form-row">

                    {/* --------------------------------   REGISTROS POR PAGINA  -------------------------------- */}
                    <div className="form-item-block">
                        <label 
                            className="form-label"
                            htmlFor="registros_pagina">Registros por pagina: </label>
                        <select
                            className="form-input"
                            name="registros_pagina"
                            id="registros_pagina"
                            value={s?.prospectos?.paginacion?.registros_pagina || '50'}
                            onChange={e => {
                                f.upgradeLvl2('prospectos', 'paginacion', e.target.name, e.target.value);
                            }} >
                            <option value="50">50 Registros</option>
                            <option value="100">100 Registros</option>
                            <option value="250">250 Registros</option>
                            <option value="500">500 Registros</option>
                            <option value="1000">1000 Registros</option>
                        </select>
                    </div>
                    {/* --------------------------------   /REGISTROS POR PAGINA  -------------------------------- */}

                    {/* --------------------------------   ACCIONES ELEGIDOS  -------------------------------- */}
                    <div className="form-item-block">
                        <label 
                            className="form-label"
                            htmlFor="opcion">Opciones: </label>
                        <select
                            className="form-input"
                            name="opcion"
                            id="opcion"
                            value={accion}
                            onChange={e => {
                                f.upgradeLvl2('prospectos', 'acciones', e.target.name, e.target.value);
                            }} >
                            <option value="borrar">Borrar</option>
                            <option value="archivar">Archivar</option>
                            <option value="">---------</option>
                        </select>
                    </div>

                    <div className="form-item-block">
                            <button 
                                className="btn btn-outline-primary w-1/2 mt-5"
                                onClick={accionesElegidos}>
                                Aplicar
                            </button>
                        </div>
                    {/* --------------------------------   /ACCIONES ELEGIDOS  -------------------------------- */}

                </div>
            </div>
        </React.Fragment>
    )
}

export { Acciones };
