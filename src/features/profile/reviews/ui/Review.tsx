import React from 'react';
import { UserOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar, Card, Divider, Space, Typography } from 'antd';

dayjs.extend(relativeTime);

const { Text, Paragraph } = Typography;

interface CommentProps {
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: string | Date;
  likes?: number;
  dislikes?: number;
  isAuthor?: boolean;
}

const Review: React.FC<CommentProps> = ({
  author,
  content,
  createdAt,
  likes = 0,
  dislikes = 0,
  isAuthor = false,
}) => {
  return (
    <Card
      size="small"
      style={{ marginBottom: 16 }}
      bodyStyle={{ padding: '12px 16px' }}
    >
      <Space size={12} align="start">
        <Avatar 
          src={author.avatar} 
          icon={<UserOutlined />} 
          size="default"
        />
        
        <div style={{ flex: 1 }}>
          <Space size={4} align="center">
            <Text strong>{author.name}</Text>
            {isAuthor && (
              <Text type="secondary" style={{ fontSize: 12 }}>(автор)</Text>
            )}
            <Divider type="vertical" />
            <Space size={4}>
              <ClockCircleOutlined style={{ fontSize: 12, color: '#999' }} />
              <Text type="secondary" style={{ fontSize: 12 }}>
                {dayjs(createdAt).fromNow()}
              </Text>
            </Space>
          </Space>
          
          <Paragraph style={{ margin: '8px 0 0' }}>
            {content}
          </Paragraph>
          
          <Space size={16} style={{ marginTop: 8 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              <LikeOutlined /> {likes} 
            </Text>
            <Text type="secondary" style={{ fontSize: 12 }}>
              <DislikeOutlined /> {dislikes} 
            </Text>
          </Space>
        </div>
      </Space>
    </Card>
  );
};

export default Review;