/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import PrettyPrintJson from '../item-representation/PrettyPrintJson';
// import ControlledInput from '../ControlledInput';
// import RecursiveComponentLink from './RecursiveComponentLink';
import MainNavigation from './MainNavigation';

export default function MainRouter() {
  const data = useGetData();
  // const routes = data.map((item) => {
  //   console.log(item);
  //   return <RecursiveComponentRoute data={item} id={item.id} />;
  //   // <Route key={`/${item.id}`} path={`/${item.id}`} exact>
  //   //   <PrettyPrintJson data={item} />
  //   // </Route>
  // });
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '20%',
            background: '#f0f0f0',
          }}
        >
          <MainNavigation data={data} />
          {/* <ControlledInput />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.map((item) => (
              <li>
                <RecursiveComponentLink name={item.id} items={item.children} />
              </li>
            ))}
          </ul> */}
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <Switch>
            {data.map((item) => (
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
