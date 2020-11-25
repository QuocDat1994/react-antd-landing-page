import React from 'react';
import { Col, Row } from 'antd';
import { createFromIconfontCN, SettingOutlined, HeartOutlined } from '@ant-design/icons';

import { Container } from "../../components/Container/Container";
import { AboutCard } from './AboutCard/AboutCard';

import "./About.less"

export const About = () => {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam.'
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_2229651_x05rlty28sb.js',
    ],
  });

  return (
    <section id="about" className="about">
      <Container>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={8}>
            <AboutCard
              icon={<SettingOutlined />}
              title={"React Component"}
              description={description}
            />
          </Col>
          <Col xs={24} sm={20} md={12} lg={8}>
            <AboutCard
              icon={<IconFont type="icon-paintbrush" />}
              title={"Ant Design"}
              description={description}
            />
          </Col>
          <Col xs={24} sm={20} md={12} lg={8}>
            <AboutCard
              icon={<HeartOutlined />}
              title={"Crafted with Love"}
              description={description}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
