import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import Icon from 'Assets/icon.png';
import styles from './index.scss';
import { pwd } from '../../utils/Validators';

class reg extends Component {
  regexValidate(rule, value, cb) {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      cb(rule.message);
    } else {
      cb();
    }
  }
  pwdConfirmValidate = (rule, value, cb) => {
    if (value !== this.props.form.getFieldValue('pwd')) {
      cb(rule.message);
    } else {
      cb();
    }
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
          <Form.Item label="确认密码">
            {getFieldDecorator('pwd_confirmed', {
              rules: [
                {
                  required: true,
                  message: 'confirmed password is required'
                },
                {
                  pattern: pwd,
                  message: 'password should have 6 characters at least',
                  validator: this.regexValidate
                },
                {
                  message: `onfirmed password didn't matched`,
                  validator: this.pwdConfirmValidate
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({})(reg);
