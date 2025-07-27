import { DislikeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Flex, Image, Typography } from "antd"
import type { Model } from "../types";

type ModelCardProps = Model;

const { Text } = Typography;

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  preview_image,
  view_count
}) => {
  return (
    <Flex vertical>
      <Image 
        preview={false}
        height={"200px"}
        src={preview_image ? preview_image : ""}
        />
        <Flex justify="space-between" style={{ padding: "10px" }}>
          <Flex gap={"5px"} align="center">
            <Avatar />
            <Text>{name}</Text>
          </Flex>
          <Flex gap={5}>
            <Flex gap={5} align="center">
              <MessageOutlined size={32}/>
              <Text type="secondary">{view_count}</Text>
            </Flex>
            <Flex gap={5} align="center">
              <LikeOutlined size={32} />
              <Text type="secondary">{5}</Text>
            </Flex>
            <Flex gap={5} align="center">
              <DislikeOutlined size={5}/>
              <Text type="secondary">{5}</Text>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default ModelCard
