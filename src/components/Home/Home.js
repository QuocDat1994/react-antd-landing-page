import React from 'react'
import { Row, Col, Button, Space } from 'antd';
import "./Home.less";

export const Home = () => {
  return (
    <section id="home" className="Home">
      <div className="container">
        <Row>
          <Col xs={24} md={12}>
            <h1 className="heading">Handcrafted Web Template For Business and Startups</h1>
            <p className="sub-heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              dolores ea fugiat nesciunt quisquam.
            </p>
            <Space size={"large"}>
              <Button type="primary" className="button">
                <a href="#local">
                  Download
                </a>
              </Button>
              <Button type="default" className="button">
                <a href="#local">
                  Contact US
                </a>
              </Button>
            </Space >
          </Col>
          <Col xs={24} md={12}>
            <img
              className="img-intro"
              src="https://preview.uideck.com/items/slick/business/img/intro.png"
              alt="intro" />
          </Col>
        </Row>
      </div>
    </section >
  )
}
