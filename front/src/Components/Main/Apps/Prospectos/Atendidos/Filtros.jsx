import React from 'react';
import { AllContext } from '../../../../../App/MyContext';

const Filtros = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();

    const validarFiltroIncidencia = cat => {
        f.upgradeLvl2('prospectos', 'filtros', 'incidencia_b', null);
        const incidencias_filtro = (s?.prospectos?.extraData?.etapa_incidencia?.incidencias || []).filter(incidencia => {
            return !!cat ? incidencia.subcategoria === cat : true;
        });
        f.setLvl3('prospectos', 'extraData', 'incidencias_filtro', incidencias_filtro);
    }

    return (
        <React.Fragment>
            <div className="flex w-full content mt-5">
                <form 
                className='w-full flex flex-col justify-start items-center flex-wrap'
                onSubmit={e => {
                    e.preventDefault();
                    f.prospectos.buscarProspectos('atencion');
                }}
                >
                    <div className="form-row">

                        {/* --------------------------------   INCIDENCIA CATEGORIA   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="incidencia_cat">Categoria de Incidencia</label>
                            <select
                                className="form-input"
                                name="incidencia_cat"
                                id="incidencia_cat"
                                value={s?.prospectos?.filtros?.incidencia_cat || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                    validarFiltroIncidencia(e.target.value);
                                }}
                                >
                                <option value="">-------------</option>
                                {(s?.prospectos?.extraData?.etapa_incidencia?.etapas || []).map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.subcategoria}>{ele.subcategoria}</option>
                                    )
                                })}
                                <option value="Inscrito">Inscrito</option>
                                <option value="Archivo muerto">Archivo muerto</option>
                            </select>
                        </div>
                        {/* --------------------------------   /INCIDENCIA CATEGORIA   -------------------------------- */}

                        {/* --------------------------------   INCIDENCIA   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="incidencia_b">Incidencia</label>
                            <select
                                className="form-input"
                                name="incidencia_b"
                                id="incidencia_b"
                                value={s?.prospectos?.filtros?.incidencia_b || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                >
                                <option value="">-------------</option>
                                {(s?.prospectos?.extraData?.incidencias_filtro || []).map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.incidencia_id}>{ele.descripcion}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* --------------------------------   /INCIDENCIA   -------------------------------- */}

                        {/* --------------------------------   GESTORES   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="gestor_b">Gestores: </label>
                            <select
                                className="form-input"
                                name="gestor_b"
                                id="gestor_b"
                                value={s?.prospectos?.filtros?.gestor_b || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                >
                                <option value="T">Todos</option>
                                {(s?.prospectos?.extraData?.gestores_subordinados || []).map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.clave}>{ele.nombre}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* --------------------------------   /GESTORES   -------------------------------- */}

                        {/* --------------------------------   ESTADO   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="estado">Estado: </label>
                            <select
                                className="form-input"
                                name="estado"
                                id="estado"
                                value={s?.prospectos?.filtros?.estado || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                >
                                <option value="">-------------</option>
                                {(s?.generales?.extraData?.estados || []).map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.value}>{ele.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* --------------------------------   /ESTADO   -------------------------------- */}

                        {/* --------------------------------   REGISTRADO DEL   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="registrado_del">Registrado del: </label>
                            <input
                                type="date"
                                className="form-input"
                                name="registrado_del"
                                id="registrado_del"
                                value={s?.prospectos?.filtros?.registrado_del || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                />
                        </div>
                        {/* --------------------------------   /REGISTRADO DEL   -------------------------------- */}

                        {/* --------------------------------   REGISTRADO AL   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="registrado_al">Registrado al: </label>
                            <input
                                type="date"
                                className="form-input"
                                name="registrado_al"
                                id="registrado_al"
                                value={s?.prospectos?.filtros?.registrado_al || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                />
                        </div>
                        {/* --------------------------------   /REGISTRADO AL   -------------------------------- */}

                        {/* --------------------------------   INCIDENCIA DEL   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="incidencia_del">Ultima llamada del: </label>
                            <input
                                type="date"
                                className="form-input"
                                name="incidencia_del"
                                id="incidencia_del"
                                value={s?.prospectos?.filtros?.incidencia_del || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                />
                        </div>
                        {/* --------------------------------   /INCIDENCIA DEL   -------------------------------- */}

                        {/* --------------------------------   INCIDENCIA AL   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="incidencia_al">Ultima llamada al: </label>
                            <input
                                type="date"
                                className="form-input"
                                name="incidencia_al"
                                id="incidencia_al"
                                value={s?.prospectos?.filtros?.incidencia_al || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                />
                        </div>
                        {/* --------------------------------   /INCIDENCIA AL   -------------------------------- */}

                        {/* --------------------------------   PROGRAMA   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="programa">Programa:</label>
                            <select
                                className="form-input"
                                name="programa"
                                id="programa"
                                value={s?.prospectos?.filtros?.programa || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                >
                                <option value="">-------------</option>
                                {(s?.prospectos?.extraData?.programas || []).map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.id_programa}>{ele.descripcion}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* --------------------------------   /PROGRAMA   -------------------------------- */}

                        {/* --------------------------------   BUSQUEDA   -------------------------------- */}
                        <div className="form-item-block">
                            <label 
                                className="form-label"
                                htmlFor="q">Busqueda: </label>
                            <input
                                type="text"
                                className="form-input"
                                name="q"
                                id="q"
                                placeholder='Ingrese parametro'
                                value={s?.prospectos?.filtros?.q || ''}
                                onChange={e => {
                                    f.upgradeLvl2('prospectos', 'filtros', e.target.name, e.target.value);
                                }}
                                />
                        </div>
                        {/* --------------------------------   /BUSQUEDA   -------------------------------- */}

                        {/* --------------------------------   BUSCAR   -------------------------------- */}
                        <div className="form-item-block">
                            <input
                                type="submit"
                                className="btn btn-primary w-1/2 mt-5"
                                placeholder='Ingrese parametro'
                                value='Buscar'
                                />
                        </div>
                        {/* --------------------------------   /BUSCAR   -------------------------------- */}

                    </div>
                </form>

            </div>
        </React.Fragment>
    )
}

export { Filtros };
