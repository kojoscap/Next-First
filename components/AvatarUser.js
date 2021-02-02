import { UserOutlined } from '@ant-design/icons';
import { Badge, Avatar } from 'antd';

const AvatarUser = () => {
  return (
    <div style={{ textAlign: 'right', marginRight: '20px' }}>
      <span>
        <Badge count={1}>
          KOJOS
          <Avatar shape='circle' icon={<UserOutlined />} />
        </Badge>
      </span>
    </div>
  );
};

export default AvatarUser;
