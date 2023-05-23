import React from 'react';
import { AllContext } from '../../../../../../App/MyContext';

function Historial(props) {
    const { s, hp } = React.useContext(AllContext);
    const llamadas = (s?.prospectos?.actualData?.llamadas || []);
    // llamadas.length > 0 && (console.log('llamadas', llamadas));

    const getBgColor = ele => {
        return hp.inicidenciasColores(ele.incidencia_id);
    }

    return (
        <React.Fragment>
            <div className="flex w-full content mt-5 tabla-historial">
                {/* se quito flex en la de abajo */}
                <div className='w-full items-center flex-wrap'>
                    <div className='overflow-x overflow-x-scroll'>
                        <table className='table table-auto w-full'>
                            <thead>
                                <tr className='text-[0.8rem] font-bold'>
                                    <th className='border-solid h-[30px] border-b-[var(--my-minor)] text-left border-2 pl-1'>#</th>
                                    <th className='border-solid h-[30px] border-b-[var(--my-minor)] text-left border-2 pl-1'>Incidencia</th>
                                    <th className='border-solid h-[30px] border-b-[var(--my-minor)] text-left border-2 pl-1'>Fecha llamada</th>
                                    <th className='border-solid h-[30px] border-b-[var(--my-minor)] text-left border-2 pl-1'>Proxima llamada</th>
                                    <th className='border-solid h-[30px] border-b-[var(--my-minor)] text-left border-2 pl-1'>Comentarios</th>
                                </tr>
                            </thead>
                            <tbody>
                                {llamadas.map((llamada, index) => {
                                    return (
                                        <tr 
                                            key={index} 
                                            className={`text-[0.8rem] ${getBgColor(llamada)}`}
                                            >
                                            <td className='border-solid h-[28px] border-b-[var(--my-minor)] text-left border-2 px-4'>{index + 1}</td>
                                            <td className='border-solid h-[28px] border-b-[var(--my-minor)] text-left border-2 px-4'>{llamada?.descripcion}</td>
                                            <td className='border-solid h-[28px] border-b-[var(--my-minor)] text-center border-2 px-4'>{hp.showDate(llamada?.fecha_llamada)}</td>
                                            <td className='border-solid h-[28px] border-b-[var(--my-minor)] text-center border-2 px-4'>{hp.showDate(llamada?.proxima_llamada)}</td>
                                            <td className='border-solid h-[28px] border-b-[var(--my-minor)] text-right border-2 px-4'>{llamada?.comentario}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Historial };