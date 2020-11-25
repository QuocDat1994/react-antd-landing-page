import React from 'react';
import { Card, Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import "./Member.less";

export const Member = (props) => {
  const { name, position, img, facebook, twitter, linkedin } = props;
  const { Meta } = Card;

  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2229651_awfgn4o1jo8.js'
  });

  return (
    <Card
      hoverable
      className="member"
      cover={<img alt={name} src={img} />}
    >
      <Space className="member__contact">
        <a
          className="member__contact-link"
          href={facebook}
          target="_blank"
          rel="noreferrer"
        >
          <IconFont type="icon-facebook" />
        </a>
        <a
          className="member__contact-link"
          href={twitter}
          target="_blank"
          rel="noreferrer"
        >
          <IconFont type="icon-twitter" />
        </a>
        <a
          className="member__contact-link"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <IconFont type="icon-linkedin" />
        </a>
      </Space>
      <Meta title={name} description={position} />
    </Card>
  )
}
