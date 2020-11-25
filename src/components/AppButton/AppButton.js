import React from 'react';
import { Button } from 'antd';
import "./AppButton.less";

export const AppButton = (props) => {
  const { type, children } = props;

  return (
    <Button type={type} className="app-button">
      {children}
    </Button>
  )
}
