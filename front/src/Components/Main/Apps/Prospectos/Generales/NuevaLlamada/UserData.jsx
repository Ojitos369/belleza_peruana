import React from 'react';
import { AllContext } from '../../../../../../App/MyContext';

function UserData() {
    const { s, f } = React.useContext(AllContext);

    const ele = s?.prospectos?.elegido || {};
    const upgradeEle = (name, value) => {
        f.upgradeLvl2('prospectos', 'elegido', name, value);
    }

    return (
        <div className="flex w-full content mt-5">
            <div className='w-full flex justify-start items-center flex-wrap'>

                {/* --------------------------------   Nombre   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="nombre"
                        id="nombre"
                        value={ele?.nombre || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /Nombre   -------------------------------- */}

                {/* --------------------------------   Paterno   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="paterno">Paterno: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="paterno"
                        id="paterno"
                        value={ele?.paterno || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /Paterno   -------------------------------- */}

                {/* --------------------------------   Materno   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="materno">Materno: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="materno"
                        id="materno"
                        value={ele?.materno || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /Materno   -------------------------------- */}

                {/* --------------------------------   RFC   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="rfc">RFC: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="rfc"
                        id="rfc"
                        value={ele?.rfc || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /RFC   -------------------------------- */}

                {/* --------------------------------   e mail   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="e_mail">e mail: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="e_mail"
                        id="e_mail"
                        value={ele?.e_mail || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /e mail   -------------------------------- */}

                {/* --------------------------------   Telefono   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="telefono">Telefono: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="telefono"
                        id="telefono"
                        value={ele?.telefono || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /Telefono   -------------------------------- */}

                {/* --------------------------------   Estado   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="estado">Estado: </label>
                    <select
                        className="form-input"
                        name="estado"
                        id="estado"
                        value={ele?.estado || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        >
                        <option value=""></option>
                            {(s?.generales?.extraData?.estados || []).map((e, i) => {
                                return (
                                    <option key={e.value} value={e.value}>{e.name}</option>
                                )
                            })}
                    </select>
                </div>
                {/* --------------------------------   /Estado   -------------------------------- */}

                {/* --------------------------------   Tipo Aspirante   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="tipo_aspirante">Tipo Aspirante: </label>
                    <select
                        className="form-input"
                        name="tipo_aspirante"
                        id="tipo_aspirante"
                        value={ele?.tipo_aspirante || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        >
                        <option value="PROFESOR ACTIVO DE EDUCACION BáSICA">
                            PROFESOR ACTIVO DE EDUCACION BáSICA
                        </option>
                        <option value="ASPIRANTE PARTICULAR">
                            ASPIRANTE PARTICULAR
                        </option>
                    </select>
                </div>
                {/* --------------------------------   /Tipo Aspirante   -------------------------------- */}

                {/* --------------------------------   Clave Presupuestal   -------------------------------- */}
                <div className="form-item-block w-1/3">
                    <label 
                        className="form-label"
                        htmlFor="clave_presupuestal">Clave Presupuestal: </label>
                    <input
                        type="text"
                        className="form-input"
                        name="clave_presupuestal"
                        id="clave_presupuestal"
                        value={ele?.clave_presupuestal || ''}
                        onChange={e => {
                            upgradeEle(e.target.name, e.target.value);
                        }}
                        />
                </div>
                {/* --------------------------------   /Clave Presupuestal   -------------------------------- */}
            </div>
        </div>
    )
}

export { UserData };