import React from 'react';
import "./Container.less";

export const Container = (props) => {
  const { fluid, className = "", children } = props;

  return (
    <div className={`container ${fluid ? "container--fluid" : ""} ${className}`}>
      {children}
    </div>
  )
}
