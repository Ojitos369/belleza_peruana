import React from 'react';
import { AllContext } from '../../App/MyContext';
import { UserMenuModal } from '../Modals/header/UserMenuModal';
import './style/index.css'


const Header = props => {
    const { ls, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const { abierto } = props;

    const toggleUserMenu = () => {
        f.upgradeLvl2('modals', 'header', 'userMenu', !s.modals?.header?.userMenu);
    }

    const filtrarItems = e => {
        let value = e.target.value;
        let items = [];
        if (!!value) {
            value = value.toLowerCase();
            items = (s.listaProductos?.all || []).filter(item => {
                const titulo = item.titulo.toLowerCase();
                const descripcion = item.descripcion.toLowerCase();
                return titulo.includes(value) || descripcion.includes(value);
            });
        } else {
            items = s.listaProductos?.all || [];
        }
        f.upgradeLvl1('listaProductos', 'mostrar', items);
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

                <input 
                    type="text"
                    className="w-1/12 search-bar"
                    placeholder="Buscar"
                    onChange={filtrarItems}
                     />

                <button
                    className="text-icon manita"
                    onClick={toggleUserMenu}
                    >
                    {/* {icons.userAlien()} */}
                    {icons.userSecret()}
                </button>

                <button
                    className="text-icon cart-button manita ml-6"
                    onClick={toggleUserMenu}
                    >
                    {icons.cartShopping()}
                    <span className='count-cart'>
                        {s.compras?.itemsAgregados?.length || 0}
                    </span>
                </button>
            </div>
            {!!s.modals?.header?.userMenu && 
            <UserMenuModal />}
        </React.Fragment>
    )
}

export { Header };
