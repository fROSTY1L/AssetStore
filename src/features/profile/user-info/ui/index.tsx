import { UserOutlined } from '@ant-design/icons'
import { Avatar, Flex, Typography } from 'antd'
import { useAuth } from '../../../auth/hooks/useAuth';

const { Text } = Typography;

const UserInfo = () => {
  const { user } = useAuth();

  return (
      <Flex vertical align={"center"} style={{ width: "100%" }}>
        <Avatar size={64} icon={<UserOutlined/>}/>
        <Text>{user?.username}</Text>
        <Text type='secondary'>id: {user?.telegram_id}</Text>
      </Flex>
  )
}

export default UserInfo
