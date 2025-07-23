import { DislikeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Flex, Image, Typography } from "antd"

interface ModelCardProps {
  authorAvatarUrl: string,
  name: string,
  previewUrl: string,
  likes: number,
  dislikes: number,
  reviews: number
}

const { Text } = Typography;

const ModelCard: React.FC<ModelCardProps> = ({
  authorAvatarUrl,
  name,
  previewUrl,
  likes,
  dislikes,
  reviews
}) => {
  return (
    <Flex vertical>
      <Image 
        height={"200px"}
        src={previewUrl}
        fallback={"@/assets/images/error.png"}
        />
        <Flex justify="space-between" style={{ padding: "10px" }}>
          <Flex gap={"5px"} align="center">
            <Avatar 
              src={authorAvatarUrl}
            />
            <Text>{name}</Text>
          </Flex>
          <Flex gap={5}>
            <Flex gap={5} align="center">
              <MessageOutlined size={32}/>
              <Text type="secondary">{reviews}</Text>
            </Flex>
            <Flex gap={5} align="center">
              <LikeOutlined size={32} />
              <Text type="secondary">{likes}</Text>
            </Flex>
            <Flex gap={5} align="center">
              <DislikeOutlined size={5}/>
              <Text type="secondary">{dislikes}</Text>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default ModelCard
