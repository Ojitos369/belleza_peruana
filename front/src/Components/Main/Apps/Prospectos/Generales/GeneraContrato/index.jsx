import React from 'react';
import { AllContext } from '../../../../../../App/MyContext';

function GeneraContrato(props) {
    const { s, f } = React.useContext(AllContext);

    return (
        <React.Fragment>
            <p>
                GeneraContrato
            </p>
        </React.Fragment>
    )
}

export { GeneraContrato };