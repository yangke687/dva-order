import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import styles from "./IndexPage.scss";
import NavBar from "./nav";
import Home from "./home";

const { Header, Content } = Layout;

function IndexPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content className={styles.content}>
        <Home />
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
