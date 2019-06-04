import React from "react";
import { Router, Switch } from "dva/router";
import RouteItem from "./utils/Router";

const routes = [
  {
    path: "/",
    component: () => import("./pages/IndexPage"),
    model: [],
    routes: [
      {
        path: "/home",
        model: [import("./models/home")],
        component: () => import("./pages/home")
      },
      {
        path: "/about",
        model: [],
        component: () => import("./pages/about")
      },
      {
        path: "/menu",
        model: [],
        component: () => import("./pages/menu")
      },
      {
        path: "/admin",
        model: [],
        component: () => import("./pages/admin")
      },
      {
        path: "/login",
        model: [],
        component: () => import("./pages/user/login")
      },
      {
        path: "/register",
        model: [],
        component: () => import("./pages/user/reg")
      }
    ]
  }
];

function RouterConfig({ history, app }) {
  console.log("app1:", app);
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, idx) => (
          <RouteItem key={idx} app={app} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
