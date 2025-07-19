import { AppstoreOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom';

const MenuItemStyle = {
  minWidth: "32%",
  textAlign: "center" as const,
  borderRadius: "8px"
}

const Navigation = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <Menu 
        theme="dark" 
        mode="horizontal" 
        defaultSelectedKeys={[path]}
        disabledOverflow
        style={{ justifyContent: "center"}}
        >
        <Menu.Item 
        style={MenuItemStyle} 
        icon={<AppstoreOutlined />} 
        onClick={() => navigate("/")}
        key={"/models"}>
            Models
        </Menu.Item>
        <Menu.Item 
        style={MenuItemStyle} 
        icon={<ShoppingCartOutlined />} 
        onClick={() => navigate("/cart")}
        key={"/cart"}>
            Cart
        </Menu.Item>
        <Menu.Item 
        style={MenuItemStyle} 
        icon={<UserOutlined />} 
        onClick={() => navigate("/profile")}
        key={"/profile"}>
            Profile
        </Menu.Item> 
    </Menu>
  )
}

export default Navigation
