/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import PrettyPrintJson from '../item-representation/PrettyPrintJson';
import flattenArr from '../utils/flattenChildren';
// import ControlledInput from '../ControlledInput';
// import RecursiveComponentLink from './RecursiveComponentLink';
import MainNavigation from './MainNavigation';
import './main-navigation.css';
// function flattenArr(arr) {
//   const result = [];
//   arr.forEach((item) => {
//     const { id, children } = item;
//     result.push({ id, data: item });
//     if (children) result.push(...flattenArr(children));
//   });
//   return result;
// }
export default function MainRouter() {
  const data = useGetData();
  const realData = flattenArr(data);
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
        <div>
          <div className="stuck">
            <MainNavigation data={data} />
          </div>
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
            {realData.map((item) => (
              <Route key={`/${item.id}`} path={`/${item.id}`} exact>
                <PrettyPrintJson data={item.data} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
