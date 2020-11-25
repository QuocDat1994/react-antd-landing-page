import React from 'react';
import { Col, Row, Space } from 'antd';
import { SearchOutlined, LinkOutlined } from '@ant-design/icons';

import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Container } from '../../components/Container/Container';

import img01 from '../../assets/showcase/pj01.jpg';
import img02 from '../../assets/showcase/pj02.jpg';
import img03 from '../../assets/showcase/pj03.jpg';
import img04 from '../../assets/showcase/pj04.jpg';
import img05 from '../../assets/showcase/pj05.jpg';

import "./Showcase.less"

export const Showcase = () => {
  const projectList = [
    {
      img: img01,
      alt: "project1",
      name: "Project 01"
    },
    {
      img: img02,
      alt: "project2",
      name: "Project 02"
    },
    {
      img: img03,
      alt: "project3",
      name: "Project 03"
    },
    {
      img: img04,
      alt: "project4",
      name: "Project 04"
    },
    {
      img: img05,
      alt: "project5",
      name: "Project 05"
    },
    {
      img: img01,
      alt: "project6",
      name: "Project 06"
    },
    {
      img: img02,
      alt: "project7",
      name: "Project 07"
    },
  ]

  return (
    <section id="showcase" className="showcase">
      <Container fluid className="showcase__container">
        <SectionHeading className="showcase__heading" heading="Recent Works" />
      </Container>
      <div className="showcase__slider">
        <Row gutter={16}>
          {projectList.map(project => (
            <Col key={project.alt}>
              <figure className="slider-item">
                <img className="slider-item__img" src={project.img} alt={project.alt} />
                <figcaption className="slider-item__info">
                  <h2 className="slider-item__name">{project.name}</h2>
                  <Space size="large">
                    <a href="#url">
                      <SearchOutlined className="slider-item__icon" />
                    </a>
                    <a href="#url">
                      <LinkOutlined className="slider-item__icon" />
                    </a>
                  </Space>
                </figcaption>
              </figure>
            </Col>
          ))}
        </Row>
      </div>
    </section >
  )
}
