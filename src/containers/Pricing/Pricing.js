import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';

import "./Pricing.less"

export const Pricing = () => {
  return (
    <section id="pricing" className="Pricing">
      <SectionHeading heading="Pricing Plans" />
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
