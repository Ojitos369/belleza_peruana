import React from 'react';
import { AllContext } from '../../../../../App/MyContext';

import { Filtros } from './Filtros'
import { Acciones } from './Acciones'
import { Tabla } from './Tabla'

import { Circles } from '../../../../Loaders/Circles';

const Main = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const cargandoProspectos = s?.loaders?.prospectos?.getProspectos;

    document.title = 'Prospectos en Atención | ' + s?.page?.baseName;

    React.useEffect(() => {
        f.upgradeLvl2('navbar', 'actualPage', 'atencion', true);
        f.upgradeLvl1('header', 'titulo', 'Prospectos en atencion');
        if (!!s?.prospectos?.extraData?.mode && !s?.prospectos?.stayLoad) {
            f.prospectos.init();
        }
    }, [
        s?.prospectos?.extraData?.mode
    ]);

    React.useEffect(() => {
        if (!!s?.prospectos?.extraData?.mode && !s?.prospectos?.stayLoad) {
            f.prospectos.buscarProspectos();
        }
    }, [
        s?.prospectos?.paginacion?.registros_pagina,
        s?.prospectos?.paginacion?.pagina,
        s?.prospectos?.stayLoad,
    ]);

    React.useEffect(() => {
        f.upgradeLvl2('prospectos', 'extraData', 'mode', 'atencion');
    }, []);

    return (
        <React.Fragment>
            <Filtros />
            <Acciones />
            {!cargandoProspectos ?
            <Tabla /> :
            <Circles />}
        </React.Fragment>
    )
}

export { Main };
