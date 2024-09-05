import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Flex } from "antd";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {Uz, Ru, En} from '../../icons/flags'
import {changeLanguage, getLanguage, getChangedLanguage} from '../../utils/lang'


const { Header, Sider, Content } = Layout;


export const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    changeLanguage(lang)
  }

  // useEffect(() => {
  //   const lang = getLanguage();
  //   i18n.changeLanguage(lang)
  // })

  const items = [
    {
      key: "1",
      label: <Button type="link" onClick={()=> changeLang('uz')}>UZ</Button>,
      icon:  <Uz/>,
    },
    {
      key: "2",
      label: <Button type="link" onClick={()=> changeLang('en')}>EN</Button>,
      icon: <En/>
    },
    {
      key: "3",
      label: <Button type="link" onClick={()=> changeLang('ru')}>RU</Button>,
      icon: <Ru/>
    },
  ]

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical">
            <div className="text-white p-4">LOGO</div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: <NavLink to="/">{t('Home')}</NavLink>,
              },
              {
                key: "3",
                icon: <UserSwitchOutlined />,
                label: <NavLink to="/users">{t('Users')}</NavLink>,
              },
              {
                key: "2",
                icon: <ProductOutlined />,
                label: <NavLink to="/products">{t('Products')}</NavLink>,
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer}}>

            <Flex justify='space-between' align="center">
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

            <Dropdown menu={{ items }} placement="bottom" arrow>
              <Button className="mr-4">{getChangedLanguage()}</Button>
            </Dropdown>
            </Flex>
            
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <footer className="bg-slate-900 text-center text-xl text-white py-8">
        <p>
          Copyright © {new Date().getFullYear()} Your Company. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};
