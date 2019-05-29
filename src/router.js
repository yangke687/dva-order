import React from "react";
import { Router, Switch } from "dva/router";
import IndexPage from "./pages/IndexPage";
import RouteItem from "./utils/Router";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Admin from "./pages/admin";
import Login from "./pages/user/login";
import Reg from "./pages/user/reg";

const routes = [
  {
    path: "/",
    component: IndexPage,
    routes: [
      {
        path: "/home",
        component: Home
      },
      {
        path: "/about",
        component: About
      },
      {
        path: "/menu",
        component: Menu
      },
      {
        path: "/admin",
        component: Admin
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "/register",
        component: Reg
      }
    ]
  }
];

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, idx) => (
          <RouteItem key={idx} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
