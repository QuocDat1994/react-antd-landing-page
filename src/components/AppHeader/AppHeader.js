import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Affix, Space } from 'antd';
import "./AppHeader.less"
import { Menu } from 'antd';

// import { AppMenu } from './AppMenu/AppMenu';

export const AppHeader = () => {
  const { Item } = Menu;

  return (
    <Affix offsetTop={0}>
      <Header className="AppHeader">
        <div className="container">
          <a className="logo" href="#localhost">
            <img
              src="https://preview.uideck.com/items/slick/business/img/logo.png"
              alt="logo"
            />
          </a>
          <Menu
            className="AppMenu"
            mode={"horizontal"}
            defaultSelectedKeys={"home"}
            forceSubMenuRender={true}
            overflowedIndicator={<i className="fas fa-bars"></i>}
          >
            <Item key="home">Home</Item>
            <Item key="about">About</Item>
            <Item key="services">Services</Item>
            <Item key="showcase">Showcase</Item>
            <Item key="pricing">Pricing</Item>
            <Item key="team">Team</Item>
            <Item key="blog">Blog</Item>
            <Item key="contact">Contact</Item>
          </Menu>
        </div>
      </Header>
    </Affix >
  )
}