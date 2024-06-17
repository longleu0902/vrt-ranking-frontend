import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  AppstoreFilled,
  CalendarFilled,
  GoldFilled,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Redux/login-reducer";
const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Quản lí bài viết", "1", <AppstoreFilled />),
  getItem("Quản lí sự kiện", "2", <CalendarFilled />),
  getItem("Quản lí xếp hạng", "sub1", <GoldFilled />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Quản lí vận động viên", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "7"),
  ]),
  getItem("Cài Đặt", "8", <SettingOutlined />),
];
export const CmsHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [index, setIndex] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClickMenu = (e) => {
    console.log("Clicked item:", e);
    setIndex(e.key);
  };

  useEffect(()=> {
    setIndex(1)
  },[])

  const handleLogOut = () => {
    const payload = {
      username: "test",
      token: "",
      isAuthentication: false,
    };
    dispath(setLogin(payload));
    navigate("/");
  };
  return (
    <Layout style={{ height: "100vh", textAlign:'start' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleClickMenu}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {index}
          {index == 8 && <button onClick={() => handleLogOut()}>Log out</button>}
        </Content>
      </Layout>
    </Layout>
  );
};
