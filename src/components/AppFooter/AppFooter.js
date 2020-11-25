import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { RightOutlined } from '@ant-design/icons';

import "./AppFooter.less";
import { Col, Input, Row } from 'antd';

export const AppFooter = () => {
  return (
    <Footer className="AppFooter">
      <div className="container">
        <Row gutter={32}>
          <Col span={6} className="AppFooter__logo">
            <img src="https://preview.uideck.com/items/slick/business/img/footer-logo.png" />
          </Col>
          <Col span={4}>
            <div className="AppFooter__list">
              <h2>Company</h2>
              <ul>
                <li><a href="#url">- About Us</a></li>
                <li><a href="#url">- Career</a></li>
                <li><a href="#url">- Blog</a></li>
                <li><a href="#url">- Press</a></li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <div className="AppFooter__list">
              <h2>Product</h2>
              <ul>
                <li><a href="#url">- Customer Service</a></li>
                <li><a href="#url">- Enterprise</a></li>
                <li><a href="#url">- Price</a></li>
                <li><a href="#url">- Security</a></li>
                <li><a href="#url">- Why SLICK?</a></li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <div className="AppFooter__list">
              <h2>Download App</h2>
              <ul>
                <li><a href="#url">- Android App</a></li>
                <li><a href="#url">- IOS App</a></li>
                <li><a href="#url">- Price</a></li>
                <li><a href="#url">- Windows App</a></li>
                <li><a href="#url">- Play Store</a></li>
                <li><a href="#url">- IOS Store</a></li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="AppFooter__list">
              <h2>Subscribe Now</h2>
              <p>Appropriately implement calysts for change visa wireless catalysts for change.</p>
              <Input addonAfter={<RightOutlined />} defaultValue="Email" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="AppFooter__copyright">
        <span>
          Original Theme by
          <a href="https://uideck.com/templates/slick-free-bootstrap-template/"> Slick </a>
        </span>
        <span> | </span>
        <span>
          Recreated by
          <a href="https://www.linkedin.com/in/dattruongnq/"> QuocDat </a>
        </span>
      </div>
    </Footer>
  )
}
