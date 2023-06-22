import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

const Footer = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    
    return (
        <p>
            Footer
        </p>
    )
}

export { Footer };