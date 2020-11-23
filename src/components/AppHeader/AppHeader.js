import React from 'react';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Affix } from 'antd';
import "./AppHeader.less"

export const AppHeader = () => {
  const { Item } = Menu;

  return (
    <Affix offsetTop={0}>
      <Header className="AppHeader">
        <a className="brand" href="#">
          <img
            src="https://preview.uideck.com/items/slick/business/img/logo.png"
            alt="logo"
          />
        </a>
        <Menu mode="horizontal" defaultSelectedKeys={"home"}>
          <Item key="home">Home</Item>
          <Item key="about">About</Item>
          <Item key="services">Services</Item>
          <Item key="showcase">Showcase</Item>
          <Item key="pricing">Pricing</Item>
          <Item key="team">Team</Item>
          <Item key="blog">Blog</Item>
          <Item key="contact">Contact</Item>
        </Menu>
      </Header>
    </Affix >

  )
}