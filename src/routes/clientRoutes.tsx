import { ProfileOutlined, RobotOutlined, ShopOutlined } from "@ant-design/icons";
import type { RouteObject } from "react-router-dom";
import Models from "../pages/Models";
import Cart from "../pages/Cart";
import UserProfile from "../pages/UserProfile";

type ClientRoutes = RouteObject & {
    path: string;
    menuTitle: string;
    icon: React.ReactNode;
}

/* 
    TODO:  Добавить сюда новые роуты
*/

export const clientRoutes: ClientRoutes[] = [
    {
        path: "/",
        menuTitle: "Models",
        icon: <RobotOutlined />,
        children: [
            { index: true, element: <Models />},
        ]
    },
    {
        path: "cart",
        menuTitle: "Cart",
        icon: <ShopOutlined />,
        children: [
            { index: true, element: <Cart />},
        ]
    },
    {
        path: "profile",
        menuTitle: "Profile",
        icon: <ProfileOutlined />,
        children: [
            { index: true, element: <UserProfile />}
        ]
    }
]