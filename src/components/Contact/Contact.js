import React from 'react'
import { Form, Col, Input, Row, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea';

import { SectionHeading } from '../Common/SectionHeading/SectionHeading';

import contact from "../../assets/contact/contact.png";

import "./Contact.less";


export const Contact = () => {
  const { Item } = Form;

  return (
    <section id="contact" className="Contact">
      <div className="container">
        <SectionHeading heading="Get In Touch" />
        <Row gutter={24}>
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
                    <TextArea placeholder="Write Message" />
                  </Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Item>
                    <Button type="primary" className="button">Submit</Button>
                  </Item>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col sm={24} lg={12}>
            <div className="img-contact">
              <img src={contact} alt={contact}></img>
            </div>
          </Col>
        </Row>
      </div >
    </section >
  )
}
