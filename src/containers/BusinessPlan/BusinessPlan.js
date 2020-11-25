import React from 'react'
import { Col, Row } from 'antd';
import { Container } from '../../components/Container/Container';
import { AppButton } from '../../components/AppButton/AppButton';

import img from "../../assets/business-plan/business-img.png";
import "./BusinessPlan.less"

export const BusinessPlan = () => {
  return (
    <section id="BusinessPlan" className="business-plan">
      <Container className="business-plan__container">
        <Row gutter={64}>
          <Col sm={24} md={12}>
            <img className="business-plan__img" src={img} alt={img} />
          </Col>
          <Col sm={24} md={12}>
            <h1 className="business-plan__title">
              Crafted For Business, Startup and Agency Websites
            </h1>
            <p className="business-plan__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a
              href="https://github.com/QuocDat1994/react-antd-landing-page"
              target="_blank"
              rel="noreferrer"
            >
              <AppButton type="primary" >
                Download
            </AppButton>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
