import React from 'react';
import Navigation from './Nav/Navigation';
import './Header.scss';

const Header = ({ location }) => (
  <>
    <Navigation location={ location }/>
    <div className="header__container container">
      <div className="row">
        <div className="col-md-6 header__text-block">
          <h1 className="header__heading-1">Копия Galaxy S10</h1>
          <h2 className="header__heading-2">Всего за 7990руб</h2>
          <p className="header__plain-text">
            Быстрая доставка по России<br/>
            Оплата товара при получении!
          </p>
          <a href="#contacts" className="header__btn nav__link nav__link--btn ">Заказать Galaxy S10</a>
        </div>
        <div className="col-md-6">
          <img
            className="header__image"
            src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/header-phone.png" alt="header phone"/>
        </div>
      </div>
    </div>
  </>
);

export default Header;
