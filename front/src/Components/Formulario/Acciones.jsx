import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

function Acciones() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    return (
        <Fragment>
            <br />
            <input 
                className='btn bg-blue-700'
                type="submit" value="Guardar" />
        </Fragment>
    )
}

export { Acciones };
