import { Layout, Menu } from 'antd';
import Link from 'next/link';
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
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider } = Layout;

const Navi = ({ collapsed, trigger }) => {
  // const router = useRouter();
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
        <Link href='/'>
          <span className={styles.title}>{collapsed ? 'SJ' : 'SejoongIS'}</span>
        </Link>
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
        <Menu.Item key='1' icon={<UserOutlined />}>
          <Link href='/about'>About</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<VideoCameraOutlined />}>
          <Link href='/potrans'>거래처정보</Link>
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
        <SubMenu key='sub1' icon={<TeamOutlined />} title='광양Smart Team'>
          <Menu.Item key='7'>사동로</Menu.Item>
          <Menu.Item key='8'>위 런</Menu.Item>
        </SubMenu>
        <Menu.Item key='9' icon={<ShopOutlined />}>
          <a
            href='http://www.sejoongis.co.kr'
            target='_blank'
            rel='noopener noreferrer'
          >
            세중 홈페이지
          </a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navi;
