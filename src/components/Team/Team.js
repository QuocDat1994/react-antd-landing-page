import React from 'react';
import { Col, Row } from 'antd';

import { Member } from './Member/Member';
import member1 from '../../assets/team/member1.jpg';
import member2 from '../../assets/team/member2.jpg';
import member3 from '../../assets/team/member3.jpg';
import member4 from '../../assets/team/member4.jpg';

import "./Team.less"
import { SectionHeading } from '../Common/SectionHeading/SectionHeading';

export const Team = () => {
  const memberList = [
    {
      name: "Patric Green",
      position: "Lead Designer",
      img: member1,
      facebook: "#facebook",
      twitter: "#twitter",
      linkedin: "#linkedin"
    },
    {
      name: "Celina D Cruze",
      position: "Front-end Developer",
      img: member2,
      facebook: "#facebook",
      twitter: "#twitter",
      linkedin: "#linkedin"
    },
    {
      name: "Daryl Dixon",
      position: "Content Writer",
      img: member3,
      facebook: "#facebook",
      twitter: "#twitter",
      linkedin: "#linkedin"
    },
    {
      name: "Mark Parker",
      position: "Support Engineer",
      img: member4,
      facebook: "#facebook",
      twitter: "#twitter",
      linkedin: "#linkedin"
    },
  ]

  return (
    <section id="team" className="Team">
      <SectionHeading heading="Team Members" />
      <Row gutter={[24, 24]} justify="center">
        {
          memberList.map(member => (
            <Col xs={20} sm={12} md={8} lg={6} key={member.name + member.position}>
              <Member
                name={member.name}
                position={member.position}
                img={member.img}
                facebook={member.facebook}
                twitter={member.twitter}
                linkedin={member.linkedin}
              />
            </Col>
          ))
        }
      </Row>
    </section>
  )
}
