import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Flex, Image, Typography } from "antd"
import type { Model } from "../types";
import { useState } from "react";
import AssetDrawer from "./AssetDrawer";

type ModelCardProps = Model;

const { Text } = Typography;
/* 
  TODO: Добавить отображение комментариев
*/
const ModelCard: React.FC<ModelCardProps> = ({
  name,
  preview_image,
  model_file_url
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  }

  return (
    <>
    <Flex 
      vertical 
      style={{ 
        background: "white",
        boxShadow: "0px 0px 55px -25px rgba(34, 37, 80, 0.43)",
        marginBottom: "15px"
      }}>
      <Image 
        preview={false}
        height={"200px"}
        src={preview_image ? "http://localhost:3000"+preview_image : ""}
        onClick={showDrawer}
        />
        <Flex justify="space-between" style={{ padding: "10px" }}>
          <Flex gap={"5px"} align="center">
            <Avatar />
            <Text>{name}</Text>
          </Flex>
          <Flex gap={5} style={{ color: "gray", fontSize: "18px" }}>
            <Flex gap={5} align="center">
              <MessageOutlined/>
              <Text type="secondary">5</Text>
            </Flex>
            <Flex gap={5} align="center">
              <LikeOutlined/>
              <Text type="secondary">{5}</Text>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
    <AssetDrawer
      assetName={name} 
      modelUrl={model_file_url ? "http://localhost:3000"+model_file_url : ""}
      openDrawer={openDrawer}
      closeDrawer={onCloseDrawer}
      />

    </>
  )
}

export default ModelCard
