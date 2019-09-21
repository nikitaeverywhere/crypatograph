import React from 'react';
import { Layout, Menu, Row, Col, Button } from 'antd';
import Logo from './logo.svg'
import './App.css';

const { Header, Footer, Content } = Layout;


const App: React.FC = () => {
  return (
    <div className="app">
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Generate Identity</Menu.Item>
            <Menu.Item key="2">Delete Identity</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
          </Menu>
        </Header>
        <Content className="main">
          <Row>
            <Col span={12} offset={6}>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>DreamTeam ©2019 Created by DreamTeam devs</Footer>
      </Layout>
    </div>
  );
}

export default App;
