/*
 * @Description  : 菜单栏
 * @Author       : huyanyan
 * @Date         : 2021-07-14 11:34:04
 */
import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./layout.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Index from "@/pages/index/index";
import Color from "@/pages/color/color";
import Drage from "@/pages/drage/drage";
import Swiper from "@/pages/swiper/swiper";
import Watermark from "@/pages/watermark/watermark";

interface MenusProps {
  title: string;
  list: Array<ListProps>;
}

interface ListProps {
  name: string;
  url: string;
  component: any;
}
const menusList: Array<MenusProps> = [
  {
    title: "菜单",
    list: [
      {
        name: "任务列表",
        url: "/index",
        component: Index,
      },
      {
        name: "颜色提取器",
        url: "/color",
        component: Color,
      },
      {
        name: "图片拖拽缩放",
        url: "/drage",
        component: Drage,
      },
      {
        name: "轮播图",
        url: "/swiper",
        component: Swiper,
      },
      {
        name: "水印",
        url: "/watermark",
        component: Watermark,
      },
    ],
  },
];

export default () => {
  /**
   * 设置下拉菜单是否显示
   */
  const [visible, setVisible] = useState<boolean>(false);
  fetch("http://localhost:3001/getName?page=1&size=2").then((response) => {
    console.log(response);
  });

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      <Menu.Item key="1">退出登陆</Menu.Item>
      <Menu.Item key="2">修改账号</Menu.Item>
      <Menu.Item key="3">改变主题颜色</Menu.Item>
    </Menu>
  );

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(["0"]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState(["0"]);
  /**
   * 菜单点击事件
   */
  const handleMenuClick = (e: any) => {
    if (e.key === "3") {
      setVisible(false);
    }
  };
  /**
   * 菜单选择事件
   */
  const handleVisibleChange = (flag: boolean) => {
    setVisible(!flag);
  };

  const getUrl = () => {
    let urlList = [];
    urlList = menusList.map((item) => item.list);
    urlList = urlList.flat(1);
    return urlList;
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <div style={{ float: "right" }}>
          <Dropdown
            overlay={menu}
            onVisibleChange={() => handleVisibleChange(visible)}
            visible={visible}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              张三 <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </Header>

      {/* 左侧菜单 */}
      <Layout>
        <Router>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              style={{ height: "100%", borderRight: 0 }}
            >
              {menusList.map((item: MenusProps, index: number) => {
                return (
                  <SubMenu
                    key={index}
                    icon={<UserOutlined />}
                    title={item.title}
                  >
                    {item.list.map((it: ListProps, key: number) => {
                      return (
                        <Menu.Item key={it.name}>
                          <Link to={it.url}>{it.name}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {getUrl().map((item: ListProps, index: number) => {
                return (
                  <Route
                    path={item.url}
                    exact
                    component={item.component}
                    key={index}
                  />
                );
              })}
            </Content>
          </Layout>
        </Router>
      </Layout>
    </Layout>
  );
};
