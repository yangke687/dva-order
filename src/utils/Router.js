import React from "react";
import dynamic from "dva/dynamic";
import { Route } from "dva/router";

const DynamicComp = (app, component, routes) =>
  dynamic({
    app,
    models: () => [],
    component: () =>
      component().then(res => {
        const Component = res.default || res;
        return props => <Component {...props} app={app} routes={routes} />;
      })
  });

export default function Router({ routes, app, component }) {
  return <Route component={DynamicComp(app, component, routes)} />;
}
