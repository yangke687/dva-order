import React from "react";
import dynamic from "dva/dynamic";
import { Route } from "dva/router";

const DynamicComp = (app, models, component, routes) => {
  console.log("app3:", app);
  return dynamic({
    app,
    models: () => models,
    component: () =>
      component().then(res => {
        const Component = res.default || res;
        return props => <Component {...props} app={app} routes={routes} />;
      })
  });
};

export default function Router({ routes, app, model, component }) {
  console.log("app2:", app);
  return <Route component={DynamicComp(app, model, component, routes)} />;
}
