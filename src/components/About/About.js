import React from 'react';
import { Col, Row, Card, Button } from 'antd';

import "./About.less"

export const About = () => {
  return (
    <section id="about" className="About">
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card hoverable>
            <i className="fab fa-react"></i>
            <h2>React Component</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card hoverable>
            <i className="fas fa-paint-brush"></i>
            <h2>Ant Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card hoverable>
            <i className="far fa-heart"></i>
            <h2>Crafted with Love</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.</p>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
