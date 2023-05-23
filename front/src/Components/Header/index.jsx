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

                <div className="w-8/12 name-center">
                    <Link to="/" className="w-full text-center">
                        <b className="text-end big-text">Belleza </b>
                        <span className="text-start small-text">Peruana</span>
                    </Link>
                </div>

                <button
                    className="text-icon manita"
                    onClick={toggleUserMenu}
                    >
                    {icons.userAlien()}
                </button>
            </div>
            {!!s.modals?.header?.userMenu && 
            <UserMenuModal />}
        </React.Fragment>
    )
}

export { Header };
