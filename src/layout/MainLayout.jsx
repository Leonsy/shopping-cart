import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

export default ( {children} ) => {
    return (
    <Layout className="layout">
        <Header />
        <Content>
            {children}
        </Content>
        <Footer />
    </Layout>
    )
};