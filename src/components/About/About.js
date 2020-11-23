import React from 'react';
import { Col, Row, Card, Button } from 'antd';

import "./About.less"

export const About = () => {
  return (
    <section id="about" className="About">
      <div className="container">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={8}>
            <Card>
              <i class="fab fa-react"></i>
              <h2>React Component</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
            </Card>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8}>
            <Card>
              <i class="fas fa-paint-brush"></i>
              <h2>Ant Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
            </Card>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8}>
            <Card>
              <i class="far fa-heart"></i>
              <h2>Crafted with Love</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={64}>
          <Col sm={24} md={12}>
            <img
              className="img-about"
              src="https://preview.uideck.com/items/slick/business/img/business/business-img.png"
              alt=""
            />
          </Col>
          <Col sm={24} md={12}>
            <h1 className="heading">
              Crafted For Business, Startup and Agency Websites
            </h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Button type="primary" className="button">
              Download
            </Button>
          </Col>
        </Row>
      </div>
    </section >
  )
}
