import React from "react";
import { connect } from "dva";
import styles from "./index.scss";

export function index(props) {
  console.log(props.text);
  return <div className={styles.home} />;
}

export default connect(({ home }) => ({ ...home }))(index);
