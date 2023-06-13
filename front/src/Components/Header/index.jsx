import React from 'react';
import { AllContext } from '../../App/MyContext';
import { UserMenuModal } from '../Modals/header/UserMenuModal';
import './style/index.css'
import { Fragment } from 'react';


const Header = props => {
    const { lf, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const { abierto } = props;

    const toggleUserMenu = () => {
        f.upgradeLvl2('modals', 'header', 'userMenu', !s.modals?.header?.userMenu);
    }

    return (
        <React.Fragment>
            <div 
                id="header-container"
                className={`flex w-full justify-start items-center text-[var(--my-minor)]`}>

                <p className="w-2/12 toggle-menu">
                    <button 
                        className='manita icon-span'
                        onClick={() => {
                            f.upgradeLvl1('mainContainer', 'sideBar', !abierto)
                        }}
                        >
                        {icons.bars()}
                    </button>
                </p>

                <div className="w-6/12 name-center">
                    <Link to="/" className="w-full text-center">
                        <b className="text-end big-text">Belleza </b>
                        <span className="text-start small-text text-[var(--my-minor)]">Peruana</span>
                    </Link>
                </div>

                <button
                    className="text-icon cart-button manita ml-6"
                    onClick={toggleUserMenu}
                    >
                    {icons.cartShopping()}
                    <span className='count-cart'>
                        {s.compras?.itemsAgregados?.length || 0}
                    </span>
                </button>

                {!s.login?.user ?
                <Fragment>
                    <Link
                        to="/login"
                        className="text-icon manita ml-4"
                        // onClick={toggleUserMenu}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Ingresar
                    </Link>

                    <Link
                        to="/signup"
                        className="text-icon manita ml-4"
                        // onClick={toggleUserMenu}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Registrarse
                    </Link>
                </Fragment>
                :
                <Fragment>
                    <Link
                        to="/"
                        className="text-icon manita ml-4"
                        onClick={lf.cerrarSesion}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Salir
                    </Link>
                </Fragment>
                }
            </div>
            {!!s.modals?.header?.userMenu && 
            <UserMenuModal />}
        </React.Fragment>
    )
}

export { Header };
