import React from 'react';
import { Affix, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { MenuOutlined } from '@ant-design/icons';
import { Container } from '../Container/Container';

import "./AppHeader.less"

export const AppHeader = () => {
  const { Item } = Menu;

  return (
    <Affix offsetTop={0}>
      <Header className="app-header">
        <Container className="app-header__content">
          <a href="#url">
            <img
              className="app-header__logo"
              src="https://preview.uideck.com/items/slick/business/img/logo.png"
              alt="logo"
            />
          </a>
          <Menu
            className="app-header__menu"
            mode={"horizontal"}
            defaultSelectedKeys={"home"}
            overflowedIndicator={<MenuOutlined className="app-header__menu-icon" />}
          >
            <Item key="home">
              <a className="app-header__menu-item" href="#home">Home</a>
            </Item>
            <Item key="about">
              <a className="app-header__menu-item" href="#about">About</a>
            </Item>
            <Item key="services">
              <a className="app-header__menu-item" href="#services">Services</a>
            </Item>
            <Item key="showcase">
              <a className="app-header__menu-item" href="#showcase">Showcase</a>
            </Item>
            <Item key="pricing">
              <a className="app-header__menu-item" href="#pricing">Pricing</a>
            </Item>
            <Item key="team">
              <a className="app-header__menu-item" href="#team">Team</a>
            </Item>
            <Item key="blog">
              <a className="app-header__menu-item" href="#blog">Blog</a>
            </Item>
            <Item key="contact">
              <a className="app-header__menu-item" href="#contact">Contact</a>
            </Item>
          </Menu>
        </Container>
      </Header>
    </Affix >
  )
}