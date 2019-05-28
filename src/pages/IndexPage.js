import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import styles from "./IndexPage.scss";
import NavBar from "./nav";
import { Switch, Route, Redirect } from "react-router";
import Home from "./home";
import About from "./about";
import Menu from "./menu";
import Admin from "./admin";
import Login from "./user/login";
import Reg from "./user/reg";

const { Header, Content } = Layout;

function IndexPage(props) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/menu" component={Menu} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Reg} />
          <Redirect to="/home" />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
