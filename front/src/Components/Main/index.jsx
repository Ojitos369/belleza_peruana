import React from 'react';
import { AllContext } from '../../App/MyContext';

import { Test } from '../Test';
import { Items } from '../Items';
import { SingUp } from '../SingUp';
import { Login } from '../Login';
import { Separador } from '../Separador';

import { Articulos } from '../Articulos';
import { Agregar as ArtAgregar } from '../Articulos/Agregar';



import { Route, Routes, Navigate } from 'react-router-dom';

const Main = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const titulo = s?.header?.titulo;

    return (
        <React.Fragment>
            <div className='flex w-full justify-start items-start content-start flex-wrap'>
                <Routes>
                    {/* -----------   Home   ----------- */}
                    <Route
                        path="/"
                        element={
                            <Items />
                        }
                    />
                    {/* -----------   /Home   ----------- */}

                    {/* -----------   SingUp   ----------- */}
                    <Route
                        path="sing_up"
                        element={
                            <SingUp />
                        }
                    />
                    {/* -----------   /SingUp   ----------- */}

                    {/* -----------   Login   ----------- */}
                    <Route
                        path="login"
                        element={
                            <Login />
                        }
                    />
                    {/* -----------   /Login   ----------- */}

                    {/* -----------   Articulos   ----------- */}
                    <Route
                        path="articulos"
                        element={<Articulos />}
                    >
                        <Route
                            path="agregar"
                            element={<ArtAgregar />}
                        />
                    </Route>
                    {/* -----------   /Articulos   ----------- */}


                    {/* -----------   Test   ----------- */}
                    <Route
                        path="test"
                        element={
                            <Test />
                        }
                    />
                    {/* -----------   /Test   ----------- */}

                    {/* -----------   404   ----------- */}
                    <Route path="*" element={<div className='text-red-700 text-4xl text-center mt-16 font-bold w-full'>404 Not Found</div>} />
                    {/* -----------   /404   ----------- */}
                </Routes>
            </div>
            <Separador smt="50"/>
        </React.Fragment>
    )
}

export { Main };
