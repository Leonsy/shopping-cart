import React from 'react';
import { Layout, Menu } from 'antd';

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
          <Menu.Item key="1">List</Menu.Item>
          <Menu.Item key="2">Cart</Menu.Item>
        </Menu>
      </Header>
    )
};