import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { CaretRightOutlined } from '@ant-design/icons';
import person1 from '../../assets/testimonial/person1.jpg';
import person2 from '../../assets/testimonial/person2.jpg';
import person3 from '../../assets/testimonial/person3.jpg';

import "./Testimonial.less"
import { Container } from '../../components/Container/Container';

export const Testimonial = () => {
  const reviewList = [
    {
      name: "Sit Amet",
      job: "Front-End Developer",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do  incididunt ut labore et dolore magna aliqua. Ut enim ad minim labore et dolore",
      avatar: person1,
    },
    {
      name: "Dolores Quos",
      job: "UIdeck Customer",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do  incididunt ut labore et dolore magna aliqua. Ut enim ad minim labore et dolore",
      avatar: person2,
    },
    {
      name: "Laudantium",
      job: "Scrum Master",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do  incididunt ut labore et dolore magna aliqua. Ut enim ad minim labore et dolore",
      avatar: person3,
    }
  ]

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  }

  const hideModal = () => {
    setVisible(false);
  }

  return (
    <section id="testimonial" className="testimonial">
      <Container fluid className="testimonial__container-fluid">
        <div className="testimonial__play-button" onClick={showModal}>
          <CaretRightOutlined className="testimonial__play-icon" />
        </div>
      </Container>
      <Container className="testimonial__container">
        <Carousel
          className="testimonial__carousel"
          dotPosition="bottom"
          autoplay
        >
          {reviewList.map(review => (
            <div key={review.name} className="carousel__item">
              <p className="carousel__item-comment">
                {review.review}
              </p>
              <p className="carousel__item-commenter">
                <span className="commenter__name">{review.name}; </span>
                {review.job}
              </p>
              <img
                className="carousel__item-avatar"
                src={review.avatar}
                alt={review.name}
              />
            </div>
          ))}
        </Carousel>
      </Container>
      <Modal
        centered
        className="testimonial__modal"
        visible={visible}
        onCancel={hideModal}
        width={"auto"}
        footer={null}
        closable={false}
      >
        <ReactPlayer url='https://www.youtube.com/watch?v=cLORaUovsc4' />
      </Modal>
    </section>
  )
}
