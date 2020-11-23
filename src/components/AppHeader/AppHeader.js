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
            <Item key="home"><a href="#home">Home</a></Item>
            <Item key="about"><a href="#about">About</a></Item>
            <Item key="services"><a href="#services">Services</a></Item>
            <Item key="showcase"><a href="#Showcase">Showcase</a></Item>
            <Item key="pricing"><a href="#pricing">Pricing</a></Item>
            <Item key="team"><a href="#team">Team</a></Item>
            <Item key="blog"><a href="#blog">Blog</a></Item>
            <Item key="contact"><a href="#contact">Contact</a></Item>
          </Menu>
        </div>
      </Header>
    </Affix >
  )
}