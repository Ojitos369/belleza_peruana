import React from 'react';
import { AllContext } from '../../App/MyContext';

import './style/index.css'

const SideBar = () => {
    const { ls, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const [abierto, setAbierto] = React.useState(true);
    const [hovers, setHovers] = React.useState({});
    const [selects, setSelects] = React.useState({});
    const [elegidos, setElegidos] = React.useState({});

    // navbar abierto o escondido
    React.useEffect(() => {
        const abr = ([false, true].includes(s?.mainContainer?.sideBar) ? s?.mainContainer?.sideBar : true) || !!s?.hovers?.sidebar;
        if (abr) {
            setAbierto(true);
         } else {
            setTimeout(() => {
                setAbierto(false);
            }, 200);
         }

    }, [
        s?.mainContainer?.sideBar, 
        s?.hovers?.sidebar
    ]);

    return (
        <React.Fragment>
            <div 
                className={`text-[var(--my-minor)] flex w-full flex-wrap justify-center items-start content-start`}
                id="sideBar"
                onMouseEnter={() => f.upgradeLvl1('hovers', 'sidebar', true)}
                onMouseLeave={() => f.upgradeLvl1('hovers', 'sidebar', false)}
                >
                    <p 
                        className={`w-full mt-4 ${abierto ? 'text-center' : 'hidden'}`}>
                        {!!s.login?.user?.nombre ?
                        <span>
                            {s.login?.user?.nombre} {s.login?.user?.apellido}
                        </span> :
                        <span>
                            <Link to="login" className="text-[var(--my-minor)]">
                                Iniciar sesión
                            </Link>
                        </span>
                        }
                    </p>

                    <Link 
                        className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-center' : 'hidden'}`}
                        to="articulos/agregar"
                        >
                        Agregar Articulos
                    </Link>
            </div>
        </React.Fragment>
    )
}

export { SideBar };
