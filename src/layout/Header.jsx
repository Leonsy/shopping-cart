import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

export default () => {
  return (
    <Header className="header">
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/list">List</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
};