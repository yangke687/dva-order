import React, { useState, useEffect } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.scss';

const rawMenus = [
  {
    key: 'home',
    path: '/home',
    name: 'Home'
  },
  {
    key: 'menu',
    path: '/menu',
    name: 'Menu'
  },
  {
    key: 'admin',
    path: '/admin',
    name: 'Admin'
  },
  {
    key: 'about',
    path: '/about',
    name: 'About'
  },
  {
    key: 'login',
    path: '/login',
    name: 'Sign In'
  },
  {
    key: 'register',
    path: '/register',
    name: 'Sign Up'
  }
];

export default function index(props) {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [menus, setMenus] = useState(rawMenus);

  useEffect(() => {
    const {
      location: { pathname }
    } = props;
    const tempKey = pathname.split('/');
    const key = tempKey.length < 2 ? 'home' : tempKey[1];
    setSelectedKeys([key]);
    /** update menu hidden field */
    const hidden = Boolean(localStorage.id) && Boolean(localStorage.email);
    setMenus(
      menus.map(menu => {
        // console.log(menu.key !== 'login', hidden);
        return menu.key === 'login' || menu.key === 'register'
          ? { ...menu, hidden }
          : menu;
      })
    );
    return () => {
      /** clean */
    };
  }, [props.location.pathname]);

  const logout = ({ key }) => {
    if (key === 'logout') {
      window.localStorage.clear();
      props.history.push('/');
    }
  }

  const menu = (
    <Menu onClick={logout}>
      <Menu.Item key="logout">
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <nav className={styles.header}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={selectedKeys}
        className={styles['menu-left']}
      >
        {menus
          .filter(({ hidden }) => !hidden)
          .map(({ key, path, name }) => {
            return (
              <Menu.Item
                key={key}
                className={
                  key === 'login'
                    ? styles.login
                    : key === 'register'
                      ? styles.reg
                      : null
                }
              >
                <Link to={path}>{name}</Link>
              </Menu.Item>
            );
          })}
      </Menu>
      {localStorage.email && localStorage.id && (
        <Dropdown overlay={menu} className={styles['dropdown-menu']}>
          <a className="ant-dropdown-link">
            <span className={styles.email}>{localStorage.email}</span>
            <Icon className={styles.icon} type="down" />
          </a>
        </Dropdown>
      )}
    </nav>
  );
}
