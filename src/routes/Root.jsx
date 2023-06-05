import { HeatMapOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const items = [getItem("Recordings", "1", <PlayCircleOutlined />, [getItem("All users ", "sub-1")]), getItem("Heatmaps", "2", <HeatMapOutlined />)];

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const navigate = useNavigate();

  const onMenuClick = ({ key }) => {
    switch (key) {
      case "sub-1":
        navigate("/recordings");
    }
    console.log(key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} onClick={onMenuClick} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        />
        <Content
          style={{
            margin: "0 16px"
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0"
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Root;
