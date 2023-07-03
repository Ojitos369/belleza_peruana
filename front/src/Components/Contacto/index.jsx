import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import './style/index.css';

import nosotrosImg from '../../static/img/nosotros.jpg';

const Contacto = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    useEffect(() => {
        f.upgradeLvl1('shows', 'sidebar', false);
        f.upgradeLvl1('mainContainer', 'sideBar', false);
    }, []);

    return (
        <Fragment>
          <div className="flex flex-col w-full">
            
          </div>
        </Fragment>
    )
}

export { Contacto };
