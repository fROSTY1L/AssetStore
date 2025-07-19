import { Avatar, Flex, Typography } from 'antd'

interface PurchaseProps {
    author: string,
    name: string,
    date: string,
    price: number    
}

const { Text } = Typography;

const Purchase = (props: PurchaseProps) => {
  return (
    <Flex>
      <Avatar />
      <Text>{props.name}</Text>
      <Text>{props.date}</Text>
    </Flex>
  )
}

export default Purchase
