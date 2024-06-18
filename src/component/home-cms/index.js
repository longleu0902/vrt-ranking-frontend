import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  AppstoreFilled,
  CalendarFilled,
  GoldFilled,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { CmsSetting } from "../cms-setting";
import "./styles.css"

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children, disabled = false, className = "") {
  return {
    key,
    icon,
    children,
    label,
    disabled,
    className,
  };
}

const items = [
  getItem("VRT-Ranking-Admin", "0", null, null, true, "bright-menu-item"), 
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

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClickMenu = (e) => {
    const clickedItem = items.find((item) => item.key === e.key);
    if (clickedItem && clickedItem.disabled) {
      return;
    }
    console.log("Clicked item:", e);
    setIndex(e.key);
  };

  useEffect(() => {
    setIndex("1"); 
  }, []);

  return (
    <Layout style={{ height: "100vh", textAlign: "start" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleClickMenu}
        >
          {items.map((item) =>
            item.children ? (
              <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                className={item.className}
              >
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
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
          {index === "8" && <CmsSetting />}
        </Content>
      </Layout>
    </Layout>
  );
};
