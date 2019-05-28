import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "dva/router";
import styles from "./index.scss";

export default function index(props) {
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const {
      location: { pathname }
    } = props;
    const tempKey = pathname.split("/");
    const key = tempKey.length < 2 ? "home" : tempKey[1];
    setSelectedKeys([key]);
    return () => {
      /** clean */
    };
  }, [props.location.pathname]);

  return (
    <nav>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        selectedKeys={selectedKeys}
        className={styles.menu}
      >
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="menu">
          <Link to="/menu">Menu</Link>
        </Menu.Item>
        <Menu.Item key="admin">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="login" className={styles.login}>
          <Link to="/login">Sign In</Link>
        </Menu.Item>
        <Menu.Item key="register" className={styles.reg}>
          <Link to="/register">Sign Up</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}
