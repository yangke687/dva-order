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
        component: () => import("./pages/home"),
        auth: true // need to be authorized
      },
      {
        path: "/about",
        model: [],
        component: () => import("./pages/about"),
        auth: true,
        routes: [
          {
            path: "/about/history",
            model: [],
            component: () => import("./pages/about/History")
          },
          {
            path: "/about/contact",
            model: [],
            component: () => import("./pages/about/Contact"),
            routes: [
              {
                path: "/about/contact/phone",
                model: [],
                component: () => import("./pages/about/ContactPhone")
              },
              {
                path: "/about/contact/address",
                model: [],
                component: () => import("./pages/about/ContactAddr")
              }
            ]
          },
          {
            path: "/about/delivery",
            model: [],
            component: () => import("./pages/about/Delivery")
          },
          {
            path: "/about/guide",
            model: [],
            component: () => import("./pages/about/Guide")
          }
        ]
      },
      {
        path: "/menu",
        model: [],
        component: () => import("./pages/menu"),
        auth: true
      },
      {
        path: "/admin",
        model: [],
        component: () => import("./pages/admin"),
        auth: true
      },
      {
        path: "/login",
        model: [],
        component: () => import("./pages/user/login"),
        auth: false
      },
      {
        path: "/register",
        model: [],
        component: () => import("./pages/user/reg"),
        auth: false
      }
    ]
  }
];

function RouterConfig({ history, app }) {
  // console.log("app1:", app);
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
