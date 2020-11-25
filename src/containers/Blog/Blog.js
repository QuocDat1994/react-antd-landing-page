import React from 'react';
import { Col, Row } from 'antd';

import { Post } from './Post/Post';
import { Container } from '../../components/Container/Container'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';

import post1 from '../../assets/blog/post1.jpg';
import post2 from '../../assets/blog/post2.jpg';
import post3 from '../../assets/blog/post3.jpg';

import "./Blog.less";

export const Blog = () => {
  const postList = [
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      timeRead: "4 min",
      author: "David",
      publishedTime: "10 April, 2020",
      img: post1,
      alt: "example",
      url: "#url",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      timeRead: "7 min",
      author: "Admin",
      publishedTime: "10 April, 2020",
      img: post2,
      alt: "example",
      url: "#url",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      timeRead: "5 min",
      author: "QC",
      publishedTime: "10 April, 2020",
      img: post3,
      alt: "example",
      url: "#url",
    },
  ]

  return (
    <section id="blog" className="blog">
      <Container>
        <SectionHeading heading="Latest Blog Posts" />
        <Row gutter={[24, 24]} justify="center">
          {
            postList.map((post, index) => (
              <Col xs={20} md={12} lg={8} key={index + post.author}>
                <Post
                  title={post.title}
                  description={post.description}
                  timeRead={post.timeRead}
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
      </Container>
    </section >
  )
}
