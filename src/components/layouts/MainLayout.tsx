import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navigation from "../widgets/Navigation";

const { Content, Footer } = Layout;

const MainLayout: React.FC = () => (
    <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "24px" }}>
            <Outlet />
        </Content>
        <Footer style={{ 
            padding: "0px",
            position: "sticky",  // Фиксирует футер внизу экрана
            bottom: 0,          // Прижимает к нижней границе
            background: "#fff",  // Чтобы контент не просвечивал (если нужно)
            zIndex: 1,          // Чтобы футер был поверх других элементов
        }}>
            <Navigation />
        </Footer>
    </Layout>
);

export default MainLayout;