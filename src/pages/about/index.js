import React, { Component } from "react";
import { Tabs } from "antd";
import { Switch, Redirect } from "dva/router";
import styles from "./index.scss";
import RouterItem from "../../utils/Router";

const { TabPane } = Tabs;

export default class index extends Component {
  handleChange = key => {
    if (this.props.history.location.pathname !== key) {
      this.props.history.push(key);
    }
  };

  render() {
    const { routes, app } = this.props;
    return (
      <div className={styles.root}>
        <Tabs
          tabPosition="left"
          className={styles.tabs}
          onChange={this.handleChange}
          activeKey={this.props.history.location.pathname}
        >
          <TabPane tab="Order History" key="/about/history" />
          <TabPane tab="Contact Us" key="/about/contact" />
          <TabPane tab="Order Guides" key="/about/guide" />
          <TabPane tab="Delivery" key="/about/delivery" />
        </Tabs>
        <div className={styles.routes}>
          <Switch>
            {routes.map((router, i) => {
              return <RouterItem {...router} app={app} key={i} />;
            })}
            <Redirect exact from="/about" to="/about/history" />
          </Switch>
        </div>
      </div>
    );
  }
}
