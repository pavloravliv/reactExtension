/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import PrettyPrintJson from './item-representation/PrettyPrintJson';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

export default function MainRouter() {
  const data = useGetData();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.map((item) => (
              <li>
                <Link to={`/${item.id}`}>{item.id}</Link>
              </li>
            ))}
          </ul>

          <Switch>
            {data.map((item) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route key={`/${item.id}`} path={item.id} exact />
            ))}
          </Switch>
          {/* <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch> */}
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <Switch>
            {data.map((item) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route key={`/${item.id}`} path={`/${item.id}`} exact>
                <PrettyPrintJson data={item} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
