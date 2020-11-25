import React from 'react'
import { Form, Col, Input, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea';

import { Container } from '../../components/Container/Container';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';

import contact from "../../assets/contact/contact.png";

import "./Contact.less";
import { AppButton } from '../../components/AppButton/AppButton';

export const Contact = () => {
  const { Item } = Form;

  return (
    <section id="contact" className="contact">
      <Container>
        <SectionHeading heading="Get In Touch" />
        <Row gutter={24} className="contact__form">
          <Col sm={24} lg={12}>
            <Form>
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Item >
                    <Input placeholder="Name" />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item >
                    <Input placeholder="Subject" />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Item >
                    <Input placeholder="Email" />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item >
                    <Input placeholder="Budget" />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Item >
                    <TextArea rows={5} placeholder="Write Message" />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Item>
                    <AppButton type="primary">
                      Submit
                    </AppButton>
                  </Item>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={24} lg={12}>
            <div className="contact__img">
              <img src={contact} alt={contact} />
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
