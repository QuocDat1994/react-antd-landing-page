import React from 'react';
import { Card } from 'antd';
import { AppIcon } from '../../../components/AppIcon/AppIcon';
import "./AboutCard.less"

export const AboutCard = (props) => {
  const { Meta } = Card;
  const { icon, title, description } = props;

  return (
    <Card
      hoverable
      className="about__card"
      cover={
        <AppIcon
          icon={icon}
          className="about__card-icon"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  )
}
