import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import './Colors.scss'

const Colors = () => {
  const [currentImage, setCurrentImage]
    = useState(<img className="colors__img" src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/style_col1.png" alt="white" />);

  const setColor = (color) => {
    switch (color) {
      case 'white' :
        setCurrentImage(
          <img className="colors__img" src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/style_col1.png" alt="white" />);
        break;
      case 'black' :
        setCurrentImage(
          <img className="colors__img" src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/style_col2.png" alt="black" />);
        break;
      case 'green' :
        setCurrentImage(
          <img className="colors__img" src="http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/style_col3.png" alt="green" />)
    }
  };

  return (
    <div className="row colors__container">
      <div className="col-md-5">
        {currentImage}
      </div>
      <div className="col-md-7 colors__text-container">
        <h2 className="description__heading-2">3 стильных цвета</h2>
        <h3 className="description__heading-3">Выберите свой ультрамодный цвет</h3>

        <Button.Group className="colors__button-group">
          <Button onClick={() => setColor('white')}>White</Button>
          <Button.Or />
          <Button color="black" onClick={() => setColor('black')}>Black</Button>
          <Button.Or />
          <Button color="teal" onClick={() => setColor('green')}>Green</Button>
        </Button.Group>
      </div>
    </div>
  )
};

export default Colors;