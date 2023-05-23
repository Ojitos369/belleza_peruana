import React from 'react';
import { AllContext } from '../../../../../../App/MyContext';
import axios from 'axios';

function Paginacion(props) {
    const { ls, s, f, Link } = React.useContext(AllContext);
    const { no_paginas, pagina } = props.paginacion ? props.paginacion : (s?.prospectos?.paginacion || {});

    const ejecutar = props.funcion ? props.funcion : (pagina) => {
        f.setLvl2('prospectos', 'stayLoad', false);
        f.upgradeLvl2('prospectos', 'paginacion', 'pagina', pagina);
    };

    if (no_paginas > 1) {
        return (
            <div 
                className='flex justify-center w-full mt-2 mb-2 paginacion-row'>
                <div className="flex justify-start w-10/12 paginacion">
                    {pagina > 1 && 
                    <button 
                        className={`flecha paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(pagina - 1);
                        }}>
                        <span>&laquo;</span>
                    </button>}

                    
                    {(no_paginas > 2 && pagina > 2) &&
                    <button 
                        className={`paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(1);
                        }}>
                        <p >
                            1
                        </p>
                    </button>}

                    
                    {(no_paginas > 1 && pagina > 1) &&
                    <button 
                        className={`paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(pagina - 1);
                        }}>
                        <p>
                            { pagina - 1 }
                        </p>
                    </button>}

                    <button 
                        className={`paginacion-item paginacion-item-active`}
                        disabled>
                        <p>
                            { pagina }
                        </p>
                    </button>

                    
                    {(no_paginas > 1 && pagina < no_paginas) &&
                    <button 
                        className={`paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(pagina + 1);
                        }}>
                        <p>
                            { pagina + 1 }
                        </p>
                    </button>}

                    
                    {(no_paginas > 2 && pagina < no_paginas - 1) &&
                    <button 
                        className={`paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(no_paginas);
                        }}>
                        <p>
                            { no_paginas }
                        </p>
                    </button>}
                    
                    
                    {pagina < no_paginas &&
                    <button 
                        className={`flecha paginacion-item reflejo${ls.theme === 'white' ? '-white': ''}`}
                        onClick={() => {
                            ejecutar(pagina + 1);
                        }}>
                        <span>&raquo;</span>
                    </button>}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export { Paginacion };