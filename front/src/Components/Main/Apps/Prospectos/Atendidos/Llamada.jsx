import React from 'react';
import { AllContext } from '../../../../../App/MyContext';

import { NuevaLlamada } from '../Generales/NuevaLlamada';

const Llamada = () => {
    return (
        <React.Fragment>
            <NuevaLlamada ele_id={ele_id}/>
        </React.Fragment>
    )
}

export { Llamada };