import React from 'react';
import { Menu } from 'antd';

import "./FooterMenu.less";

export const FooterMenu = (props) => {
  const { Item } = Menu;
  const { title, menu } = props;

  return (
    <div className="footer-menu">
      <h2 className="footer-menu__title">{title}</h2>
      <Menu>
        {menu.map((item, index) => (
          <Item key={title + index}>
            <a className="footer-menu__item" href={`#${item.url}`}>- {item.text}</a>
          </Item>
        ))}
      </Menu>
    </div>
  )
}
