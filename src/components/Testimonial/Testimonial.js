import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import Modal from 'antd/lib/modal/Modal';
import { Carousel } from 'antd';

import person1 from '../../assets/testimonial/person1.jpg';
import person2 from '../../assets/testimonial/person2.jpg';
import person3 from '../../assets/testimonial/person3.jpg';

import "./Testimonial.less"

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
    <section id="testimonial" className="Testimonial">
      <div className="container">
        <div className="icon-wrapper" onClick={showModal}>
          <i class="fas fa-play" />
        </div>
      </div>
      <div className="container">
        <Carousel autoplay dotPosition="bottom">
          {reviewList.map(review => (
            <div className="carousel__item">
              <p className="review">
                {review.review}
              </p>
              <p className="name">
                <span>{review.name}; </span>
                {review.job}
              </p>
              <img
                src={review.avatar}
                alt={review.name} />
            </div>
          ))}
        </Carousel>
      </div>
      <Modal
        visible={visible}
        centered
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
