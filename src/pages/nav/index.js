import React from "react";
import { Menu } from "antd";
import styles from "./index.scss";

export default function index() {
  return (
    <nav>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        className={styles.menu}
      >
        <Menu.Item key="home">主页</Menu.Item>
        <Menu.Item key="menu">菜单</Menu.Item>
        <Menu.Item key="admin">管理</Menu.Item>
        <Menu.Item key="about">关于</Menu.Item>
        <Menu.Item key="login" className={styles.login}>
          登录
        </Menu.Item>
        <Menu.Item key="register" className={styles.reg}>
          注册
        </Menu.Item>
      </Menu>
    </nav>
  );
}
