import React from 'react';
import { AllContext } from '../../App/MyContext';

import { Fragment, useEffect } from 'react';
import './style/index.css';

const SideBar = () => {
    const { ls, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const [abierto, setAbierto] = React.useState(true);
    const [hovers, setHovers] = React.useState({});
    const [selects, setSelects] = React.useState({});
    const [elegidos, setElegidos] = React.useState({});

    const user = s.login?.user || null;
    const permisos = user?.permisos || [];

    const categorias = s.listaCategorias?.mostrar || [];
    const articulos = s.listaProductos?.all || [];
    const categorias_filtro = s.filtros?.categorias || [];

    // console.log('categorias', categorias);
    // console.log('articulos', articulos);
    // console.log('categorias_filtro', categorias_filtro);

    const filtrarCategoria = cat => {
        let cats = categorias_filtro;
        if (cats.includes(cat)) {
            cats = cats.filter(c => c !== cat);
        } else {
            cats.push(cat);
        }
        f.upgradeLvl1('filtros', 'categorias', [...cats]);
    }

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

    useEffect(() => {
        f.categorias.getCategorias();
    }, []);

    useEffect(() => {
        const new_articulos = articulos.filter(art => {
            let cats = art.categorias || [];
            return cats.some(cat => categorias_filtro.includes(cat));
        });
        f.upgradeLvl1('listaProductos', 'mostrar', new_articulos);
    }, [s.filtros?.categorias]);

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

                    {permisos.includes('adm') && 
                    <Fragment>
                        <Link 
                            className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-center' : 'hidden'}`}
                            to="articulos/agregar"
                            >
                            Agregar Articulos
                        </Link>

                        <Link 
                            className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-center' : 'hidden'}`}
                            to="articulos/editar/"
                            >
                            {/* Agregar eliminar aqui mismo */}
                            Editar Articulos
                        </Link>

                    </Fragment>}
                    {user && 
                    <Fragment>
                        <Link 
                            className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-center' : 'hidden'}`}
                            to="compras/anteriores/"
                            >
                            Compras Anteriores
                        </Link>
                    </Fragment>}

                    <p 
                        className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-center' : 'hidden'}`}
                        >
                        Filtar por categorias
                    </p>
                    {categorias.map((c, i) => {
                        const incluida = categorias_filtro.includes(c);
                        return (
                        <p 
                            key={i}
                            className={`w-1/3 text-center ${incluida && 'text-green-700'} manita`}
                            onClick={() => {
                                filtrarCategoria(c);
                            }}
                            >
                            {c}
                        </p>
                        )
                    })}
            </div>
        </React.Fragment>
    )
}

export { SideBar };
