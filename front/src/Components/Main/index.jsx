import React from 'react';
import { AllContext } from '../../App/MyContext';

import { Test } from '../Test';
import { Items } from '../Items';

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


                    {/* -----------   Test   ----------- */}
                    <Route
                        path="test"
                        element={
                            <Test />
                        }
                    />
                    {/* -----------   /Test   ----------- */}

                    {/* -----------   404   ----------- */}
                    <Route path="*/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                    {/* -----------   /404   ----------- */}
                </Routes>
            </div>
        </React.Fragment>
    )
}

export { Main };
