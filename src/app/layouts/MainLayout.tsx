import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navigation from "../../features/navigation";


const { Content, Footer } = Layout;

const MainLayout: React.FC = () => (
    <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "24px" }}>
            <Outlet />
        </Content>
        <Footer style={{ 
            padding: "0px",
            position: "sticky",
            bottom: 0,
            background: "#fff",
            zIndex: 1,
        }}>
            <Navigation />
        </Footer>
    </Layout>
);

export default MainLayout;