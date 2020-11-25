import { Card } from 'antd'
import React from 'react';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

import "./Post.less";

export const Post = (props) => {
  const { Meta } = Card;

  const { title,
    description,
    timeRead,
    author,
    publishedTime,
    img,
    alt,
    url
  } = props;

  return (
    <a href={url}>
      <Card
        className="post"
        hoverable
        cover={<img alt={alt} src={img} />}
        actions={[
          <div className="post__info">
            <div>
              <UserOutlined />
              <span> Posted by {author}</span>
            </div>
            <div>
              <CalendarOutlined />
              <span> {publishedTime}</span>
            </div>
          </div>
        ]}
      >
        <Meta title={title} description={description} />
        <time className="post__time-read">{timeRead} Read</time>
      </Card>
    </a>
  )
}
