import React, { Fragment, useEffect } from 'react';
import { MyContext } from './MyContext';
import { AllContext } from './MyContext';
import { Theme } from '../Components/Theme';

import { Main } from '../Components/Main';
import { Header } from '../Components/Header';
import { SideBar } from '../Components/SideBar';


const BgTheme = () => {
    const { ls } = React.useContext(AllContext);
    return (
        <Fragment>
            <div className={`wipeInDown full-page-container bg-my-${ls.theme}`}></div>
            <Theme />
        </Fragment>
    )
}

function AppUI() {
    const { s, ls, f, hp } = React.useContext(AllContext);

    const abierto = ([false, true].includes(s?.mainContainer?.sideBar) ? s?.mainContainer?.sideBar : true) || !!s?.hovers?.sidebar;

    React.useEffect(() => {
        f.validateRunMode();
    }, [s?.exinit]);

    useEffect(() => {
        hp.cambiarThema(ls?.theme)
    }, [ls?.theme]);

    // -------------------   Set cookies from front this can be use for validate login   ------------------- //
    React.useEffect(() => {
        const date = new Date();
        const miliseconds = 1000 * 60 * 60 * 10;
        date.setTime(date.getTime() + (miliseconds));
        const dateExpired = date.toUTCString();
        const expires = 'expires=' + dateExpired
        const miCookie = "miCookie=" + 'data_de_mi_cookie' + ";" + expires + ";path=/";
        document.cookie = miCookie;

    }, []);

    return (
        <div className="flex w-full flex-wrap">
            <BgTheme />
             <nav className={`flex ${abierto ? 'short-div-abierto' : 'short-div-cerrado'}`}>
                <SideBar />
            </nav>

            <div 
                className={`flex flex-wrap ${abierto ? 'large-div-abierto' : 'large-div-cerrado'} justify-start items-start content-start`}
                id="main-container">
                <header className='w-full flex h-[60px]'>
                    <Header abierto={abierto}/>
                </header>
                <Main />
            </div>
        </div>
    );
}

function App(props) {
    return (
        <MyContext>
            <AppUI />
        </MyContext>
    );
}

export default App;
