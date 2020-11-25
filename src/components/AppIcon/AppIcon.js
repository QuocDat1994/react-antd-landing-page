import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import "./AppIcon.less";

export const AppIcon = (props) => {
  const { icon, className = "" } = props;
  return (
    <Avatar
      className={`app-icon ${className}`}
      icon={icon}
    />
  )
}
