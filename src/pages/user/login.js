import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Icon from 'Assets/icon.png';
import styles from './index.scss';
import { pwd } from '../../utils/Validators';
import Request from '../../utils/request';

class login extends Component {
  regexValidate(rule, value, cb) {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      cb(rule.message);
    } else {
      cb();
    }
  }
  submit = e => {
    e.preventDefault();
    const {
      form: { validateFields }
    } = this.props;
    validateFields((err, values) => {
      const { email, pwd } = values;
      if (!err) {
        Request('/users.json').then(res => {
          const { data } = res;
          if (res && res.status === 200 && data) {
            let users = [];
            for (const key in data) {
              users.push({
                ...data[key],
                id: key
              });
            }
            /** validate */
            users = users.filter(
              user => user.email === email && user.pwd === pwd
            );
            /** store userInfo */
            if (users && users.length) {
            }
          }
        });
      }
    });
  };
  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <div className={styles.account}>
        <img src={Icon} alt="" className={styles.logo} />
        <Form className="account-form">
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'email is required'
                },
                {
                  type: 'email',
                  message: 'invalid email format'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator('pwd', {
              rules: [
                {
                  required: true,
                  message: 'password is required'
                },
                {
                  pattern: pwd,
                  message: 'password should have 6 characters at least',
                  validator: this.regexValidate
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary" onClick={this.submit}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(login);
