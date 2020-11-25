import React from 'react';
import { Card } from 'antd';
import { AppButton } from '../../../components/AppButton/AppButton';

import "./PriceCard.less"

export const PriceCard = (props) => {
  const { title, price, features, buttonType } = props;

  return (
    <Card className="price-card" hoverable>
      <h2 className="price-card__title">{title}</h2>
      <h3 className="price-card__price">
        <sup>$ </sup>{price}
      </h3>
      {
        features.map(feature => (
          <p className="price-card__feature" key={title + feature}>{feature}</p>
        ))
      }
      <AppButton
        className="price-card__button"
        type={buttonType}
      >
        Purchase
      </AppButton>
    </Card >
  )
}
