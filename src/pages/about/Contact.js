import React from "react";
import { Link, Switch } from "dva/router";
import RouterItem from "../../utils/Router";
import styles from "./index.scss";

export default function Contact(props) {
  const { routes, app } = props;
  return (
    <div className={styles.tabPane}>
      <p className={styles.title}>Contact Us</p>
      <div className={styles.content}>
        <Link to="/about/contact/phone">Phone</Link>
        <Link to="/about/contact/address">Address</Link>
      </div>
      <div className={styles.info}>
        <Switch>
          {routes.map((route, i) => {
            return <RouterItem key={i} {...route} app={app} />;
          })}
        </Switch>
      </div>
    </div>
  );
}
