import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';

import "./AppIcon.less";

export const AppIcon = (props) => {
  const { size = "large", icon, className } = props;

  return (
    <Avatar
      className={`app-icon ${size ? `app-icon--${size}` : ''} ${className}`}
      icon={icon}
    />
  )
}
