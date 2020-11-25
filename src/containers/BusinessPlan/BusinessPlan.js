import React from 'react'
import { Col, Row, Button } from 'antd';
import "./BusinessPlan.less"

export const BusinessPlan = () => {
  return (
    <section id="BusinessPlan" className="BusinessPlan">
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
    </section>
  )
}
