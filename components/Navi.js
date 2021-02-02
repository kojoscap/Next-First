import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import styles from '../styles/Navi.module.css';

const { Sider } = Layout;

const Navi = ({ collapsed, trigger }) => {
  return (
    <Sider
      trigger={null}
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className={styles.logo}>
        {/* <img alt='logo' className={styles.logo} src={logo} /> */}
        <span className={styles.title}>{collapsed ? 'SJ' : 'SejoongIS'}</span>
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
        <Menu.Item key='1' icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key='2' icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key='3' icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key='4' icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key='5' icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key='6' icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key='7' icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key='8' icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navi;
