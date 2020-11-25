import React from 'react';
import { Col, Input, Row } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { RightOutlined } from '@ant-design/icons';

import { Container } from "../Container/Container";
import { FooterMenu } from "./FooterMenu/FooterMenu";

import logo from "../../assets/footer/footer-logo.png";

import "./AppFooter.less";

export const AppFooter = () => {
  const menuCompany = [
    {
      url: "url",
      text: "About Us"
    },
    {
      url: "url",
      text: "Career"
    },
    {
      url: "url",
      text: "Blog"
    },
    {
      url: "url",
      text: "Press"
    },
  ]
  const menuProduct = [
    {
      url: "url",
      text: "Customer Service"
    },
    {
      url: "url",
      text: "Enterprise"
    },
    {
      url: "url",
      text: "Price"
    },
    {
      url: "url",
      text: "Security"
    },
    {
      url: "url",
      text: "Why SLICK?"
    },
  ]
  const menuDownload = [
    {
      url: "url",
      text: "Android App"
    },
    {
      url: "url",
      text: "IOS App"
    },
    {
      url: "url",
      text: "Windows App"
    },
    {
      url: "url",
      text: "Play Store"
    },
    {
      url: "url",
      text: "IOS Store"
    },
  ]

  return (
    <Footer className="app-footer">
      <Container className="app-footer__content">
        <Row gutter={[32, 24]}>
          <Col xs={24} sm={12} lg={6} className="app-footer__logo">
            <img src={logo} alt={logo} />
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <FooterMenu title="Company" menu={menuCompany} />
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <FooterMenu title="Product" menu={menuProduct} />
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <FooterMenu title="Download App" menu={menuDownload} />
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <div className="app-footer__subscribe">
              <h2 className="app-footer__subscribe-title">Subscribe Now</h2>
              <p className="app-footer__subscribe-text">Appropriately implement calysts for change visa wireless catalysts for change.</p>
              <Input
                className="app-footer__subscribe-input"
                addonAfter={<RightOutlined />}
                placeholder="Email"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="app-footer__copyright">
        <span>
          Original Theme by
          <a href="https://uideck.com/templates/slick-free-bootstrap-template/"> Slick </a>
        </span>
        <span> | </span>
        <span>
          Recreated by
          <a href="https://www.linkedin.com/in/dattruongnq/"> QuocDat </a>
        </span>
      </Container>
    </Footer>
  )
}
