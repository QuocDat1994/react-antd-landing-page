import React from 'react';
import { Col, Row } from 'antd';

import { Post } from './Post/Post';
import post1 from '../../assets/blog/post1.jpg';
import post2 from '../../assets/blog/post2.jpg';
import post3 from '../../assets/blog/post3.jpg';

import "./Blog.less";
import { SectionHeading } from '../Common/SectionHeading/SectionHeading';

export const Blog = () => {
  const postList = [
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      time: "4 min",
      author: "David",
      publishedTime: "10 April, 2020",
      img: post1,
      alt: "example",
      url: "#url",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      time: "7 min",
      author: "Admin",
      publishedTime: "10 April, 2020",
      img: post2,
      alt: "example",
      url: "#url",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      time: "5 min",
      author: "QC",
      publishedTime: "10 April, 2020",
      img: post3,
      alt: "example",
      url: "#url",
    },
  ]

  return (
    <section id="blog" className="Blog">
      <div className="container">
        <SectionHeading heading="Latest Blog Posts" />
        <Row gutter={[24, 24]} justify="center">
          {
            postList.map((post, index) => (
              <Col xs={20} md={12} lg={8} key={index + post.author}>
                <Post
                  title={post.title}
                  description={post.description}
                  time={post.time}
                  author={post.author}
                  publishedTime={post.publishedTime}
                  img={post.img}
                  alt={post.alt}
                  url={post.url}
                />
              </Col>
            ))
          }
        </Row>
      </div>
    </section >
  )
}
