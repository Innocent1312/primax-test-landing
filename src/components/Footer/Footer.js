import React, { useState } from 'react';
import './Footer.scss';
import { Input } from "semantic-ui-react";

const Footer = () => {
  const [hasError, setError] = useState(null);

  const validMail = (event) => {
    event.preventDefault();
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    reg.test(event.target.value) ? setError(false) : setError(true);
  };

  return(
    <div className="container" id="contacts">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 contacts__container">
          <h2 className="description__heading-2 contacts__heading-2">Оставьте заявку</h2>
          <h3 className="description__heading-3 contacts__heading-3">Мы свяжемся с вами</h3>

          <Input
            action={{
              color: 'violet',
              labelPosition: 'left',
            }}
            className="contacts__input-name"
            actionPosition='left'
            placeholder="Name..."
          />
          <Input
            action={{
              color: 'violet',
              labelPosition: 'left',
            }}
            className="contacts__input-email"
            actionPosition='left'
            placeholder="mail@example.com"
            onChange={event => validMail(event)}
          />
          <a href="/" className="nav__link nav__link--btn contacts__btn">Отправить</a>

          <p className="error__message">{hasError ? 'Введите коректный email' : ''}</p>
          <p className="footer__data">
            ООО «Смартшоп» <br/>
            ИНН 2502027698 <br/>
            ОГРН 1022500528379 <br/>
            109469, г. Москва, Перервинский бульвар, д. 14
          </p>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  )
};

export default Footer;
