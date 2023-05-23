import React, { useEffect, useContext, useState } from 'react';
import { AllContext } from '../../../../../../App/MyContext';

function CapturaLlamada(props) {
    const { s, f } = useContext(AllContext);
    const [incidencias, setIncidencias] = useState({
        subCategoria: [],
        incidenciaId: [],
    });

    // console.log('s?.prospectos?.extraData?.incidencias_filtro', s?.prospectos?.extraData?.incidencias_filtro);

    useEffect(() => {
        f.upgradeLvl2('prospectos', 'llamadaActual', 'sub_incidencia', '');
        if (!s?.prospectos?.llamadaActual?.incidencia_cat) {
            return;
        }
        const added = [];
        const options = (s?.prospectos?.extraData?.incidencias_filtro || []).filter(ele => {
            const valid = ele.etapa === s?.prospectos?.llamadaActual?.incidencia_cat;
            if (valid) {
                if (!added.includes(ele.sub_id)) {
                    added.push(ele.sub_id);
                    return true;
                }
            }
        });
        setIncidencias({
            subCategoria: options,
            incidenciaId: [],
        });
        if (options.length === 1) {
            f.upgradeLvl2('prospectos', 'llamadaActual', 'sub_incidencia', options[0].sub_id);
        }
    }, [s?.prospectos?.llamadaActual?.incidencia_cat]);


    useEffect(() => {
        f.upgradeLvl2('prospectos', 'llamadaActual', 'incidencia', '');
        if (!s?.prospectos?.llamadaActual?.sub_incidencia) {
            return;
        }
        // console.log('checking:', s?.prospectos?.llamadaActual?.sub_incidencia, s?.prospectos?.llamadaActual?.incidencia_cat);
        const options = (s?.prospectos?.extraData?.incidencias_filtro || []).filter(ele => {
            const valid = parseInt(ele.sub_id) === parseInt(s?.prospectos?.llamadaActual?.sub_incidencia) && ele.etapa === s?.prospectos?.llamadaActual?.incidencia_cat;
            if (valid) {
                return true;
            }
        });
        setIncidencias({
            ...incidencias,
            incidenciaId: options,
        });
        if (options.length === 1) {
            f.upgradeLvl2('prospectos', 'llamadaActual', 'incidencia', options[0].incidencia_id);
        }
    }, [s?.prospectos?.llamadaActual?.sub_incidencia]);

    return (
        <React.Fragment>
            <div className="flex w-full content mt-5">
                <div className='w-full flex justify-start items-center flex-wrap'>

                    {/* --------------------------------   Categoria de Incidencia   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="incidencia_cat">Categoria de Incidencia: </label>
                        <select
                            className="form-input"
                            name="incidencia_cat"
                            id="incidencia_cat"
                            value={s?.prospectos?.llamadaActual?.incidencia_cat || ''}
                            onChange={e => {
                                f.upgradeLvl2('prospectos', 'llamadaActual', e.target.name, e.target.value);
                            }}
                            >
                            <option value=""></option>
                            <option value="No Contactado">No Contactado</option>
                            <option value="Contactado">Contactado</option>
                        </select>
                     </div>
                    {/* --------------------------------   /Categoria de Incidencia   -------------------------------- */}

                    {/* --------------------------------   Subcategoria Incidencia   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="sub_incidencia">Subcategoria Incidencia: </label>
                        <select
                            className="form-input"
                            name="sub_incidencia"
                            id="sub_incidencia"
                            value={s?.prospectos?.llamadaActual?.sub_incidencia || ''}
                            onChange={e => {
                                f.upgradeLvl2('prospectos', 'llamadaActual', e.target.name, e.target.value);
                            }}
                            >
                            <option value=""></option>
                            {incidencias.subCategoria.map(ele => {
                                return <option key={ele.sub_id} value={ele.sub_id}>{ele.subcategoria}</option>
                            })}
                        </select>
                     </div>
                    {/* --------------------------------   /Subcategoria Incidencia   -------------------------------- */}

                    {/* --------------------------------   Incidencia   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="incidencia">Incidencia: </label>
                        <select
                            className="form-input"
                            name="incidencia"
                            id="incidencia"
                            value={s?.prospectos?.llamadaActual?.incidencia || ''}
                            onChange={e => {
                                f.upgradeLvl2('prospectos', 'llamadaActual', e.target.name, e.target.value);
                            }}
                            >
                            <option value=""></option>
                            {incidencias.incidenciaId.map(ele => {
                                return <option key={ele.incidencia_id} value={ele.incidencia_id}>{ele.descripcion}</option>
                            })}
                        </select>
                     </div>
                    {/* --------------------------------   /Incidencia   -------------------------------- */}
                </div>
            </div>
        </React.Fragment>
    )
}

export { CapturaLlamada };
