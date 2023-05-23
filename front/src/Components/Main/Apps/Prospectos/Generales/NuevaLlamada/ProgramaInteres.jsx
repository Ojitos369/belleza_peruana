import React from 'react';
import { AllContext } from '../../../../../../App/MyContext';

function ProgramaInteres() {
    const { s, f } = React.useContext(AllContext);

    const upgradeEle = (name, value) => {
        f.upgradeLvl2('prospectos', 'elegido', name, value);
    }

    const programasDisponibles = s?.prospectos?.elegido?.interes === 'P' ? (s?.prospectos?.extraData?.programas || []) : s?.prospectos?.elegido?.interes === 'C' ? (s?.prospectos?.extraData?.cursos || []) : [];

    React.useEffect(() => {
        if (s?.prospectos?.elegido?.programa_interes !== undefined && s?.prospectos?.elegido?.programa_interes !== null && programasDisponibles.length > 0) {
            const progra_elegido = programasDisponibles.find(p => parseInt(p.id_programa) === parseInt(s?.prospectos?.elegido?.programa_interes));
            const desc = progra_elegido?.descripcion || '';
            f.upgradeLvl2('prospectos','elegido','programa_interes_desc', desc);
        }
    }, [s?.prospectos?.elegido?.programa_interes, programasDisponibles]);

    return (
        <React.Fragment>
            <div className="flex w-full content mt-5">
                <div className='w-full flex justify-start items-center flex-wrap'>

                    {/* --------------------------------   Clave centro trabajo   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="clavecct">Clave centro trabajo: </label>
                        <input
                            type="text"
                            className="form-input"
                            name="clavecct"
                            id="clavecct"
                            value={s?.prospectos?.elegido?.clavecct || ''}
                            onChange={e => {
                                upgradeEle(e.target.name, e.target.value);
                            }}
                            />
                    </div>
                    {/* --------------------------------   /Clave centro trabajo   -------------------------------- */}

                    {/* --------------------------------   Curso/Programa   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="interes">Curso/Programa: </label>
                        <select
                            className="form-input"
                            name="interes"
                            id="interes"
                            value={s?.prospectos?.elegido?.interes || ''}
                            onChange={e => {
                                upgradeEle(e.target.name, e.target.value);
                            }}
                            >
                            <option value="P">Programas</option>
                            <option value="C">Cursos</option>
                        </select>
                    </div>
                    {/* --------------------------------   /Curso/Programa   -------------------------------- */}

                    {/* --------------------------------   Interes   -------------------------------- */}
                    <div className="form-item-block w-1/3">
                        <label 
                            className="form-label"
                            htmlFor="programa_interes">Interes: </label>
                        <select
                            className="form-input"
                            name="programa_interes"
                            id="programa_interes"
                            value={s?.prospectos?.elegido?.programa_interes || ''}
                            onChange={e => {
                                upgradeEle(e.target.name, e.target.value);
                            }}
                            >
                            {programasDisponibles.map((p, index) => {
                                return (
                                    <option key={p.id_programa} value={p.id_programa}>{p?.descripcion}</option>
                                )
                            })}
                        </select>
                    </div>
                    {/* --------------------------------   /Interes   -------------------------------- */}

                </div>
            </div>
        </React.Fragment>
    )
}

export { ProgramaInteres };