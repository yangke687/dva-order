import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'antd';
import { connect } from 'dva';
import Icon from 'Assets/icon.png';
import styles from './index.scss';
import { pwd } from '../../utils/Validators';
import Request from '../../utils/request';

@connect()
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
              user => user.email === email && user.password === pwd
            );
            /** store userInfo */
            if (users && users.length) {
              /** store user into localStorage */
              localStorage.setItem('email', users[0].email);
              localStorage.setItem('id', users[0].id);

              const { dispatch, history } = this.props;
              dispatch({
                type: 'global/setUser',
                payload: {
                  email: users[0].email,
                  id: users[0].id
                }
              });
              history.push('/');
            } else {
              Message.error('invalid account');
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
