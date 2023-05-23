import React from 'react';
import { AllContext } from '../../../../App/MyContext';
import { Outlet } from 'react-router-dom';

const Prospectos = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    document.title = 'Prospectos | ' + s?.page?.baseName;

    React.useEffect(() => {
        const seleccionados = {
            prospectos: true,
        }
        f.upgradeLvl1('navbar', 'seleccionados', seleccionados);
    }, []);

    return (
        <Outlet />
    )
}

export { Prospectos };
