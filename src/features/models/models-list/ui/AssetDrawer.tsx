import { Avatar, Drawer, Flex, Space } from 'antd'
import { ModelViewer } from './ModelViewer';
import { CloseOutlined, LikeOutlined } from '@ant-design/icons';

interface AssetDrawerProps {
    assetName: string;
    modelUrl: string;
    openDrawer: boolean;
    closeDrawer: () => void;
}

const AssetDrawer = (props: AssetDrawerProps) => {
  return (
    <Drawer
      title={props.assetName}
      placement={"bottom"}
      width={"100vh"}
      height={"100vh"}
      closable={false}
      open={props.openDrawer}
      extra={
        <Space>
          <CloseOutlined onClick={props.closeDrawer}/>
        </Space>
        }
    >
      <Space style={{ 
        height: "45vh",
        width: "100%",
        border: "1px solid black",
        overflow: "hidden"
        }}>
        <ModelViewer modelUrl={props.modelUrl}/>
      </Space>
      <Flex justify='space-between'>
        <Avatar />
        <Flex>
          <LikeOutlined />
        </Flex>
      </Flex>
    </Drawer>
  )
}

export default AssetDrawer
