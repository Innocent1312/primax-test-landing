import React from 'react';
import './Specifications.scss';

const Specifications = () => (
  <div className="specifications__container" id="specifications">
    <h2 className="description__heading-2">
      Выберите свой Galaxy S10 из нашего каталога
    </h2>
    <h3 className="description__heading-3">
      Чтобы Вам не совершить ошибку при покупке, мы отобрали лучшие модели - цена/качество. Смотрите характеристики.
    </h3>
    <div className="specifications__text-container">
      <div className="image_block">
        <img className="specifications__image" src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/catalog2.png" alt=""/>
      </div>
      <div className="text__block">
        <p className="specifications__text">
          <b>Технические характеритики:</b> <br/>
          Процессор: Exynos 9820 <br/>
          Количество ядер: 8 <br/>
          ОC: Android 9.0 Pie <br/>
          Объём памяти: 128 Гб + MicroSD <br/>
          Оперативная память: 8 ГБ <br/>
          Камера: Три камеры 16+12+12 Мпикс <br/>
          Фронтальная камера: 10 Мп <br/>
          Экран: 6.1", Динамический AMOLED <br/>
          Корпус: металл/стекло <br/>
          Батарея: 3400 mAh <br/>
          Размеры: 70.4x149.9x7.8 мм <br/>
          Вес: 157 г <br/>
          Сеть: Wi-fi, 3G, 4G/LTE <br/>
          Безопасность: Touch iD <br/>
          <a href="#contacts" className="nav__link nav__link--btn specifications__link">
            Заказaть Galaxy S10
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Specifications;
