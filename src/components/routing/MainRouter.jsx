/* eslint-disable no-unused-vars */
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
import SplitView from '../split-view/split-view';
import Item from '../item-representation/Item';
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
  const data2 = useGetData('timers');
  const realData = [...flattenArr(data), ...flattenArr(data2)];
  return (
    <Router>
      <SplitView
        left={(
          <div className="scrollable">
            <MainNavigation data={data} />
          </div>
        )}
        right={(
          <div>
            <Switch>
              {realData.map((item) => (
                <Route key={`/${item.id}`} path={`/${item.id}`} exact>
                  <Item itemData={item.data} />
                  {/* <ItemCompound itemData={item.data} /> */}
                </Route>
              ))}
            </Switch>
          </div>
        )}
      />
    </Router>
  );
}
