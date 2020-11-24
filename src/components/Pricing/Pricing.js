import React from 'react';
import { Row, Col, Card, Button } from 'antd';

import "./Pricing.less"

export const Pricing = () => {
  return (
    <section id="pricing" className="Pricing">
      <h1 className="heading">Pricing Plans</h1>
      <p className="sub-heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <br className="break-point" />
        sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <h2>Free</h2>
            <h3>
              <sup>$ </sup>00
            </h3>
            <p>Free Instalation</p>
            <p>500MB Storage</p>
            <p>Single User</p>
            <p>5 GB Bandwith</p>
            <p>Minimal Features</p>
            <p>No Dashboard</p>
            <Button>Purchase</Button>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <h2>Standard</h2>
            <h3>
              <sup>$ </sup>19.99
            </h3>
            <p>Free Instalation</p>
            <p>2 GB Storage</p>
            <p>Upto 2 users</p>
            <p>50 GB Bandwith</p>
            <p>All Features</p>
            <p>Sales Dashboard</p>
            <Button type="primary">Purchase</Button>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <h2>Business</h2>
            <h3>
              <sup>$ </sup>29.99
            </h3>
            <p>Free Instalation</p>
            <p>5 GB Storage</p>
            <p>Upto 4 users</p>
            <p>100 GB Bandwith</p>
            <p>All Features</p>
            <p>Sales Dashboard</p>
            <Button>Purchase</Button>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
