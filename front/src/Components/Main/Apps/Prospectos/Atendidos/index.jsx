import React from 'react';
import { AllContext } from '../../../../../App/MyContext';
import { Outlet } from 'react-router-dom';

const Atendidos = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();

    React.useEffect(() => {
        f.upgradeLvl2('navbar', 'actualPage', 'atencion', true);
    }, []);

    return (
        <Outlet />
    )
}

export { Atendidos };
