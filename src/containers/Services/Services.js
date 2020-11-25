import React from 'react';
import { Card } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { Container } from '../../components/Container/Container';
import { ServiceCard } from './ServiceCard/ServiceCard';

import "./Services.less";

export const Services = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore."
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2229651_awfgn4o1jo8.js'
  });

  const serviceList = [
    {
      title: "Easy to Customize",
      description: description,
      icon: "icon-coffee"
    },
    {
      title: "Business Template",
      description: description,
      icon: "icon-suitcase"
    },
    {
      title: "Clean & Trendy Design",
      description: description,
      icon: "icon-Idea"
    },
    {
      title: "Tons of Sections",
      description: description,
      icon: "icon-stack1"
    },
    {
      title: "Free Future Updates",
      description: description,
      icon: "icon-sync1"
    },
    {
      title: "Premier Support",
      description: description,
      icon: "icon-message1"
    },
  ]

  return (
    <section id="services" className="services">
      <Container>
        <SectionHeading heading="Services We Provide" />
        <Card className="services__content">
          {
            serviceList.map(service => (
              <ServiceCard
                key={service.title}
                icon={<IconFont type={service.icon} />}
                title={service.title}
                description={service.description}
              />
            ))
          }
        </Card>
      </Container>
    </section>
  )
}
