import React from 'react';
import { Button } from 'antd';
import "./AppButton.less";

export const AppButton = (props) => {
  const { type, className = "", children } = props;

  return (
    <Button type={type} className={`app-button ${className}`}>
      {children}
    </Button>
  )
}
