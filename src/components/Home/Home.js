import React from 'react'
import { Row, Col, Button } from 'antd';
import "./Home.less";

export const Home = () => {
  return (
    <div className="Home">
      <Row className="container">
        <Col xs={24} md={12}>
          <h1 className="heading">Handcrafted Web Template For Business and Startups</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            dolores ea fugiat nesciunt quisquam.
          </p>
          <div>
            <Button type="primary" className="button">
              <a href="#">
                Download
              </a>
            </Button>
            <Button type="default" className="button">
              <a href="#">
                Contact US
              </a>
            </Button>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img
            className="img-intro"
            src="https://preview.uideck.com/items/slick/business/img/intro.png"
            alt="intro" />
        </Col>
      </Row>
    </div>
  )
}
