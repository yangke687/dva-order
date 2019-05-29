import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import styles from "./IndexPage.scss";
import NavBar from "./nav";
import RouteItem from "../utils/Router";
import { Switch, Route, Redirect } from "react-router";

const { Header, Content } = Layout;

function IndexPage(props) {
  const { routes } = props;
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        <Switch>
          {routes.map((route, idx) => (
            <RouteItem key={idx} {...route} />
          ))}
          <Redirect exact={true} from="/" to="/home" />
          <Route render={props => <dvi>404</dvi>} />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
