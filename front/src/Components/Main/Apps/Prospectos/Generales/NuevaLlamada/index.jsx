import React, { useEffect, useContext, useState } from 'react';
import { AllContext } from '../../../../../../App/MyContext';

import { UserData } from './UserData';
import { ProgramaInteres } from './ProgramaInteres';
import { Historial } from './Historial';
import { CapturaLlamada } from './CapturaLlamada';

function NuevaLlamada(props) {
    const { useParams, s, f, Icons } = useContext(AllContext);
    const { ele_id } = useParams();
    const [valido, setValido] = useState(false);

    document.title = 'Nueva llamada | ' + s?.page?.baseName;

    useEffect(() => {
        f.prospectos.getFullIncidencias();
    }, []);

    useEffect(() => {
        if (!((this?.s?.prospectos?.extraData?.programas.find || []).lenght > 0)) {
            f.prospectos.getFullIncidencias();
            f.generales.getEstados();
            f.prospectos.obtieneProgramas();
            f.prospectos.obtieneCursos();
        }
        f.setLvl2('prospectos', 'stayLoad', false);
        f.prospectos.getProspecto(ele_id, setValido);
        /** 
            * Elige el prospecto de los disponibles si se encuenta, en caso de que no
            * se encuentren los prospectos aun cargados hace la peticion para cargarlos y busca el que se haya elegido

            * TODO: Agregar api para buscar el prospecto en caso de que no se encuentre en la lista cargada
            */
    }, [
        s?.prospectos?.paginacion?.registros,
        s?.prospectos?.extraData?.mode,
    ]);


    useEffect(() => {
        if (!!valido) {
            f.prospectos.validarProgramas();
        }
    }, [valido]);

    useEffect(() => {
        f.resetLvl2('prospectos', 'llamadaActual');
        f.resetLvl2('prospectos', 'actualData');
        setValido(false);
        f.setLvl2('prospectos','elegido',null);
        f.prospectos.getLlamadasAnteriores(ele_id);
    }, [s.prospectos?.elegido?.prospecto]);

    if(!valido) {
        return (
            <div className="flex flex-col h-[50px] mt-[50px] justify-center items-center aling-center">
                <p className='text-center text-3xl w-full font-bold text-red-700'>Sin Permiso para ese prospecto</p>
            </div>
        )
    }
    else {
        return (
            <div className="w-full flex content-center items-center flex-col mt-3 mb-2">
                <div className="w-[95%] flex content-start flex-col">

                    <h3 className='font-semibold w-full text-start'>Datos del Prospecto</h3>
                    <UserData />

                    <h3 className='mt-3 font-semibold w-full text-start'>Interes Actual: {s?.prospectos?.elegido?.programa_interes_desc}</h3>
                    <ProgramaInteres />

                    <h3 className='mt-3 font-semibold w-full text-start'>Bitacora de llamadas ({(s?.prospectos?.actualData?.llamadas || []).length})</h3>
                    <Historial />

                    <h3 className='mt-3 font-semibold w-full text-start'>Datos de la llamada</h3>
                    <CapturaLlamada />
                </div>
            </div>
        )
    }
}

export { NuevaLlamada };