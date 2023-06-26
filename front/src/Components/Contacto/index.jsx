import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import './style/index.css';

import nosotrosImg from '../../static/img/nosotros.jpg';

const Contacto = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    useEffect(() => {
        f.upgradeLvl1('shows', 'sidebar', false);
        f.upgradeLvl1('mainContainer', 'sideBar', false);
    }, []);

    return (
        <Fragment>
            {/* Contact */}
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4>Ponerse en contacto</h4>
                    <h3>Escribenos un mensaje</h3>
                  </div>
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="name">Tu nombre<span>*</span></label>
                          <input id="name" name="name" type="text" placeholder="" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="subject">Su asunto<span>*</span></label>
                          <input id="subject" name="subject" type="text" placeholder="" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="email">Su correo electronico<span>*</span></label>
                          <input id="email" name="email" type="email" placeholder="" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Su telefono<span>*</span></label>
                          <input id="phone" name="phone" type="text" placeholder="" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <label htmlFor="message">Tu mensaje<span>*</span></label>
                          <textarea id="message" name="message" placeholder="" required autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <i className="fas fa-phone" />
                    <h4 className="title">Llamanos ahora:</h4>
                    <ul>
                      <li>+51 956-789-110</li>
                      <li>+51 972-452-112</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fas fa-envelope-open" />
                    <h4 className="title">Email:</h4>
                    <ul>
                      <li><a href="mailto:info@yourwebsite.com">info@ybelleza.com</a></li>
                      <li><a href="mailto:support@yourwebsite.com">unfo@web.com</a></li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fas fa-location-arrow" />
                    <h4 className="title">Nuestra direccion:</h4>
                    <ul>
                      <li>62/1, Trujillo Victor Larco.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Contact */}
        </Fragment>
    )
}

export { Contacto };
