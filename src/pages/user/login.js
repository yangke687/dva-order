import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Icon from 'Assets/icon.png';
import styles from './index.scss';

export default class login extends Component {
  render() {
    return (
      <div className={styles.account}>
        <img src={Icon} alt="" className={styles.logo} />
        <Form className="account-form">
          <Form.Item label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item label="密码">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
