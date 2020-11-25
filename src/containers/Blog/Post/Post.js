import { Card } from 'antd'
import React from 'react';
import "./Post.less";

export const Post = (props) => {
  const { Meta } = Card;

  const { title,
    description,
    time,
    author,
    publishedTime,
    img,
    alt,
    url
  } = props;

  return (
    <a href={url}>
      <Card
        className="Post"
        hoverable
        cover={<img alt={alt} src={img} />}
        actions={[
          <div className="Post__info">
            <div>
              <i className="far fa-user" />
              <span> Posted by {author}</span>
            </div>
            <div>
              <i className="far fa-calendar-alt" />
              <span> {publishedTime}</span>
            </div>
          </div>
        ]}
      >
        <Meta title={title} description={description} />
        <time>{time} Read</time>
      </Card>
    </a>
  )
}
