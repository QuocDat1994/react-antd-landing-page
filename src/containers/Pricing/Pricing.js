import React from 'react';
import { Row, Col } from 'antd';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Container } from '../../components/Container/Container';
import { PriceCard } from './PriceCard/PriceCard';

import "./Pricing.less"

export const Pricing = () => {
  const priceList = [
    {
      title: "Free",
      price: "00",
      features: [
        "Free Instalation",
        "500MB Storage",
        "Single User",
        "5 GB Bandwith",
        "Minimal Features",
        "No Dashboard",
      ],
      buttonType: "default",
    },
    {
      title: "Standard",
      price: "19.99",
      features: [
        "Free Instalation",
        "2 GB Storage",
        "Up to 2 users",
        "50 GB Bandwith",
        "All Features",
        "Sales Dashboard",
      ],
      buttonType: "primary",
    },
    {
      title: "Business",
      price: "29.99",
      features: [
        "Free Instalation",
        "5 GB Storage",
        "Up to 4 users",
        "100 GB Bandwith",
        "All Features",
        "Sales Dashboard",
      ],
      buttonType: "default",
    },
  ]

  return (
    <section id="pricing" className="pricing">
      <Container>
        <SectionHeading heading="Pricing Plans" />
        <Row gutter={[24, 24]} justify="center">
          {
            priceList.map(price => (
              <Col xs={24} sm={20} md={12} lg={8} key={price.title}>
                <PriceCard
                  title={price.title}
                  price={price.price}
                  features={price.features}
                  buttonType={price.buttonType}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
