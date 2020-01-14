import React from 'react';
import './Description.scss'
import { Icon, Item, ItemGroup, Label } from "semantic-ui-react";

const Description = () => (
  <>
    <h2 className="description__heading-2">Мы выбрали самые лучшие модели Samsung на рынке</h2>
    <h3 className="description__heading-3">Новые функции, новые цвета, мощнейшая начинка, высочайшее качество</h3>
    <div className="row">
      <div className="col-md-4 description">
        <ItemGroup divided>
          <Item className="description__item">
            <Icon link className="ico" name="android" size="huge" color="violet"/>
            <Item.Content>
              <Item.Header as='a'>Android 9.0 (Pie)</Item.Header>
              <Item.Extra><Label>Оригинальный интерфейc</Label></Item.Extra>
            </Item.Content>
          </Item>

          <Item className="description__item">
            <Icon link className="ico" name="camera" size="huge" color="violet"/>
            <Item.Content>
              <Item.Header as='a'>Камера 16+12+12 Мпикс</Item.Header>
              <Item.Extra><Label>Совершенно новая камера</Label></Item.Extra>
            </Item.Content>
          </Item>

          <Item className="description__item">
            <Icon link className="ico" name="hand point up outline" size="huge" color="violet"/>
            <Item.Content verticalAlign="middle">
              <Item.Header as='a'>Сенсорный Touch ID</Item.Header>
              <Item.Extra><Label>Сканер отпечатков пальцев</Label></Item.Extra>
            </Item.Content>
          </Item>
        </ItemGroup>
      </div>

      <div className="col-md-4 description__image">
        <img
          className="img"
          src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/best_phn.png" alt="samsung" />
      </div>

      <div className="col-md-4 description">
        <ItemGroup divided>
          <Item className="description__item">
            <Icon link className="ico" name="microchip" size="huge" color="violet"/>
            <Item.Content>
              <Item.Header as='a'>Exynos 9820</Item.Header>
              <Item.Extra><Label>Новейший 8-х ядерный процессор</Label></Item.Extra>
            </Item.Content>
          </Item>

          <Item className="description__item">
            <Icon link className="ico" name="tint" size="huge" color="violet"/>
            <Item.Content>
              <Item.Header as='a'>Водонепроницаемый корпус</Item.Header>
              <Item.Extra><Label>Защита от брызг и воды</Label></Item.Extra>
            </Item.Content>
          </Item>

          <Item className="description__item">
            <Icon link className="ico" name="play" size="huge" color="violet"/>
            <Item.Content verticalAlign="middle">
              <Item.Header as='a'>Лучшие программы и игры</Item.Header>
              <Item.Extra><Label>3D-игры и программы</Label></Item.Extra>
            </Item.Content>
          </Item>
        </ItemGroup>
      </div>
    </div>
  </>
);

export default Description;
