import React from 'react';
import "./SectionHeading.less";

export const SectionHeading = (props) => {
  const defaultSubHeading = "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore."
  const { heading, subHeading = defaultSubHeading } = props;

  return (
    <div className="SectionHeading">
      <h1>{heading}</h1>
      <p>
        {subHeading}
      </p>
    </div>
  )
}
