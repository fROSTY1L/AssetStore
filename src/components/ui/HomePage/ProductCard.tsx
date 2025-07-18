import { Card, Tag, Button, Space } from 'antd';
import { ShoppingOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = {
    name: "Смартфон Premium X",
    description: "Мощный процессор, 128 ГБ памяти, AMOLED-экран",
    tags: ["Новинка", "Топ-продаж", "Акция"],
    price: "24 990 ₽",
  };

  return (
    <Card
      hoverable
      style={{ 
        width: '100%',
        height: 320,
        borderRadius: 12,
        overflow: 'hidden'
      }}
      cover={
        <div style={{ height: 140, overflow: 'hidden' }}>
          <img
            alt="Товар"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover' 
            }}
          />
        </div>
      }
    >
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: 140,
        justifyContent: 'space-between'
      }}>
        <div>
          <h4 style={{ 
            margin: 0,
            fontSize: 16,
            lineHeight: 1.2,
            marginBottom: 8,
            fontWeight: 500
          }}>
            {product.name}
          </h4>
          
          <Space size={[0, 4]} wrap style={{ marginBottom: 8 }}>
            {product.tags.map((tag, index) => (
              <Tag 
                key={index}
                style={{ 
                  fontSize: 10,
                  padding: '0 6px',
                  borderRadius: 4,
                  lineHeight: '16px'
                }}
              >
                {tag}
              </Tag>
            ))}
          </Space>
        </div>

        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <span style={{ 
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            {product.price}
          </span>
          
          <Space>
            <Button 
              shape="circle" 
              size='large'
              icon={isFavorite ? 
                <HeartFilled style={{ color: '#ff4d4f', height: "40px" }} /> : 
                <HeartOutlined />}
              onClick={() => setIsFavorite(!isFavorite)}
              style={{ border: 'none' }}
            />
            
            <Button 
              type="primary" 
              size='large'
              icon={<ShoppingOutlined />}
              style={{ borderRadius: 12 }}
            >
              Подробнее
            </Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;