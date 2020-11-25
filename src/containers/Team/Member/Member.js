import { Card, Space } from 'antd'
import React from 'react'
import "./Member.less"

export const Member = (props) => {
  const { name, position, img, facebook, twitter, linkedin } = props;
  const { Meta } = Card;

  return (
    <Card
      className="Member"
      hoverable
      cover={<img alt={name} src={img} />}
    >
      <Space className="Member__contact">
        <a href={facebook}>
          <i className="fab fa-facebook-f" />
        </a>
        <a href={twitter}>
          <i className="fab fa-twitter" />
        </a>
        <a href={linkedin}>
          <i className="fab fa-linkedin-in" />
        </a>
      </Space>
      <Meta title={name} description={position} />
    </Card>
  )
}
