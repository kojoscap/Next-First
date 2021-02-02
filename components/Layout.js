import Footer from './Footer';
import Navi from './Navi';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

import styles from '../styles/Layout.module.css';
import AvatarUser from './AvatarUser';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SecondTop from './SecondTop';

const { Header, Content } = Layout;

const LayoutNomal = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navigation 부분. */}
      <Navi collapsed={collapsed} />

      <Layout
        className={styles.siteLayout}
        style={collapsed ? { marginLeft: 80 } : { marginLeft: 200 }}
      >
        {/* Header & Avartar 부분 */}
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined
              style={{ marginLeft: '20px' }}
              className='trigger'
              onClick={toggle}
            />
          ) : (
            <MenuFoldOutlined
              style={{ marginLeft: '20px' }}
              className='trigger'
              onClick={toggle}
            />
          )}
          <AvatarUser />
        </Header>
        {/* Breadcrumb 바로가기 부분... */}
        <SecondTop />
        {/* Content 부분 */}
        <Content
          style={{
            margin: '16px 16px 0',
            overflow: 'initial',
            background: 'white',
          }}
        >
          <div
            className='site-layout-background'
            style={{ padding: 24, textAlign: 'center' }}
          >
            {children}
          </div>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutNomal;
