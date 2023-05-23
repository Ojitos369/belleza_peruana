import React from 'react';
import { AllContext } from '../../App/MyContext';
import './style/index.css'
const Header = props => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const { abierto } = props


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
                    <p className="w-full text-center">
                        <b className="text-end big-text">Belleza </b>
                        <span className="text-start small-text">Peruana</span>
                    </p>
                </div>

                <div className="w-2/12 menu-container">
                    <button 
                        className='btn btn-outline-primary w-2/3 manita menu-button'
                        onClick={lf.toggleTheme}
                        >
                        Erick Garcia
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Header };
