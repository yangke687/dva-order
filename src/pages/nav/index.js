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
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="menu">Menu</Menu.Item>
        <Menu.Item key="admin">Admin</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="login" className={styles.login}>
          Sign In
        </Menu.Item>
        <Menu.Item key="register" className={styles.reg}>
          Sign Up
        </Menu.Item>
      </Menu>
    </nav>
  );
}
