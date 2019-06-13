import React from 'react';
import dynamic from 'dva/dynamic';
import { connect } from 'dva';
import { Route, Redirect } from 'dva/router';

const DynamicComp = (app, models, component, routes, auth, user) => {
  // console.log("app3:", app);
  return dynamic({
    app,
    models: () => models,
    component: () =>
      component().then(res => {
        if (auth && !(localStorage.id || localStorage.email)) {
          return () => <Redirect to="/login" />;
        }
        const Component = res.default || res;
        return props => <Component {...props} app={app} routes={routes} />;
      })
  });
};

export function Router({ routes, app, model, component, auth, user }) {
  // console.log("app2:", app);
  // console.log("user:", user);
  // console.log("auth:", auth);
  return (
    <Route component={DynamicComp(app, model, component, routes, auth, user)} />
  );
}

export default connect(({ global }) => ({
  user: global.user
}))(Router);
