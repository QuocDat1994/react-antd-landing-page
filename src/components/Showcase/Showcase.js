import { Col, Row, Space } from 'antd';
import React from 'react';
import { SectionHeading } from '../Common/SectionHeading/SectionHeading';
import "./Showcase.less"

export const Showcase = () => {
  const projectList = [
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/01.jpg",
      alt: "project1",
      name: "Project 01"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/02.jpg",
      alt: "project2",
      name: "Project 02"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/03.jpg",
      alt: "project3",
      name: "Project 03"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/04.jpg",
      alt: "project4",
      name: "Project 04"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/05.jpg",
      alt: "project5",
      name: "Project 05"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/01.jpg",
      alt: "project6",
      name: "Project 06"
    },
    {
      img: "https://preview.uideck.com/items/slick/business/img/showcase/02.jpg",
      alt: "project7",
      name: "Project 07"
    },
  ]

  return (
    <section id="showcase" className="Showcase">
      <div className="container">
        <SectionHeading heading="Recent Works" />
      </div>
      <div className="slider">
        <Row gutter={16}>
          {projectList.map(project => (
            <Col key={project.alt}>
              <figure>
                <img src={project.img} alt={project.alt} />
                <figcaption>
                  <h2>{project.name}</h2>
                  <Space size="large">
                    <a href="#showcase">
                      <i className="fas fa-search"></i>
                    </a>
                    <a href="#showcase">
                      <i className="fas fa-link"></i>
                    </a>
                  </Space>
                </figcaption>
              </figure>
            </Col>
          ))}
        </Row>
      </div >
    </section >
  )
}
