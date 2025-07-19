import { Avatar, Flex, Space, Typography } from 'antd'

interface PurchaseProps {
    author: string,
    name: string,
    date: string,
    price: number    
}

const { Text } = Typography;

const Purchase = (props: PurchaseProps) => {
  return (
    <Flex justify='space-between' align='center'>
      <Space>
        <Avatar />
        <Flex vertical>
          <Text>{props.name}</Text>
          <Text type='secondary'>{props.date}</Text>
        </Flex>
      </Space>
      <Text>{props.price}$</Text>
    </Flex>
  )
}

export default Purchase;