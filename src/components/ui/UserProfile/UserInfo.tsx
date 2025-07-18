import { UserOutlined } from '@ant-design/icons'
import { Avatar, Flex, Typography } from 'antd'

const { Text } = Typography;

const UserInfo = () => {
  const userName = "Albert Flores";
  const userID = "nazdarq"
  return (
      <Flex vertical align={"center"} style={{ width: "100%" }}>
        <Avatar size={64} icon={<UserOutlined/>}/>
        <Text>{userName}</Text>
        <Text type='secondary'>id: {userID}</Text>
      </Flex>
  )
}

export default UserInfo
