import React from 'react';
import './Navigation.scss';
import { Header, Icon } from 'semantic-ui-react'

const Navigation = ({location}) => {
  const search = new URLSearchParams(location.search);
  let userName = search.get('utm_name');
  let refactoredUserName;
  if(!userName) {
    refactoredUserName = '';
  } else {
    refactoredUserName = userName[0].toUpperCase() + userName.slice(1) || null;
  }

  return (
      <nav className="nav navbar navbar-expand-lg navbar-light bg-white">
      <Header as='h2'>
        <Icon name="phone" color="violet"/>
        <Header.Content>
          Galaxy S10!
          <Header.Subheader>
            {!userName
              ? <span>Интернет-магазин низких цен</span>
              : <span>Welcome, {refactoredUserName}</span>}
          </Header.Subheader>
        </Header.Content>
      </Header>
      <ul className="nav__list">
        <li className="nav__item"><a href="#specifications" className="nav__link">Характеристики</a></li>
        <li className="nav__item"><a href="#video" className="nav__link">Видео</a></li>
        <li className="nav__item"><a href="#colors" className="nav__link">Цвета</a></li>
        <li className="nav__item"><a href="#comments" className="nav__link">Отзывы</a></li>
        <li className="nav__item"><a href="#contacts" className="nav__link">Контакты</a></li>
        <li className="nav__item"><a href="#contacts" className="nav__link nav__link--btn ">Заказ</a></li>
      </ul>
    </nav>
  )
};

export default Navigation;
