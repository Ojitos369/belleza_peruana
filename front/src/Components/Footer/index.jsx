import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

function Footer() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    return (
        <Fragment>
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                        {/* Single Widget */}
                        <div className="single-footer about">
                        <p className="logo-text"><span className="belleza">Belleza</span><span className="peruana">Peruana</span></p>
                        <p className="text">Como una marca de belleza de peruana, creemos que cuando te ves y te sientes bien, puedes alcanzar tu máximo potencial. Y, de la mano de una comunidad global de belleza apasionada y solidaria, ¡todo es posible! Eso significa belleza desde una perspectiva peruana. </p>
                        <p className="num">Tienes una pregunta? Llámanos 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
                        </div>
                        {/* End Single Widget */}
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        {/* Single Widget */}
                        <div className="single-footer links">
                        <h4>Informacion</h4>
                        <ul>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Terminos y Condiciones</a></li>
                            <li><a href="#">Contactenos</a></li>
                            <li><a href="#">Ayuda</a></li>
                        </ul>
                        </div>
                        {/* End Single Widget */}
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        {/* Single Widget */}
                        <div className="single-footer links">
                        <h4>Servicio al Cliente</h4>
                        <ul>
                            <li><a href="#">Metodos de pago</a></li>
                            <li><a href="#">Devolucion de dinero</a></li>
                            <li><a href="#">Envio</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Politica de privacidad</a></li>
                        </ul>
                        </div>
                        {/* End Single Widget */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Single Widget */}
                        <div className="single-footer social">
                        <h4>Ponerse en contacto</h4>
                        <div className="contact">
                            <ul>
                            <li>NO. 342 - Trujillo.</li>
                            <li>012 Larco.</li>
                            <li>info@etienda.com</li>
                            <li>+01 912 345 345</li>
                            </ul>
                        </div>
                        <ul>
                            <a href="https://wa.me/123456789" target="_blank">
                            <i className="fab fa-whatsapp whatsapp-icon" />
                            </a>
                            <a href="https://www.instagram.com/example" target="_blank">
                            <i className="fab fa-instagram instagram-icon" />
                            </a>
                            <a href="https://www.facebook.com/example" target="_blank">
                            <i className="fab fa-facebook facebook-icon" />
                            </a>
                            <a href="https://www.tiktok.com/@example" target="_blank">
                            <i className="fab fa-tiktok tiktok-icon" />
                            </a>
                        </ul>
                        </div>
                        {/* End Single Widget */}
                    </div>
                    </div>
                </div>
                </div>
                {/* End Footer Top */}
                <div className="footer-bottom section">
                <br />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="left">
                        <p>2023 &copy; Tienda online. Reservado todo los derechos.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right">
                        <img src="img/payments.png" alt="#" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}

export { Footer };
