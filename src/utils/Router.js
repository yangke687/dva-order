import React from "react";
import { Route } from "dva/router";

export default function Router({ routes, component: Component }) {
  return <Route render={props => <Component {...props} routes={routes} />} />;
}
