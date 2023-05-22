import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { Acciones } from './Acciones'

function Formulario() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);

    const icons = new Icons();
    return (
        <Fragment>
            
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    f.guardarDatos();
                }}
            >
                Username
                <br />
                <input 
                className='text-black myinput'
                type="text" 
                name="username"
                value={s?.form?.username}
                onChange={e => {
                    f.upgradeLvl1('form', 'username', e.target.value);
                }}
                />

                <br />

                Password
                <br />
                <input 
                className='text-black myinput'
                type="password" 
                name="password"
                value={s?.form?.password}
                onChange={e => {
                    f.upgradeLvl1('form', 'password', e.target.value);
                }}
                />
                <br />
                <Acciones />
            </form>
        </Fragment>
    )
}

export { Formulario };
