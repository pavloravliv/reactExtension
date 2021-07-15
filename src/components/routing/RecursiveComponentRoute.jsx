/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';
import PrettyPrintJson from '../item-representation/PrettyPrintJson';

const RecursiveComponentRoute = ({ data }) => {
  const hasChildren = !!data?.items;
  return (
    <div key={data.id}>
      <Route key={`${data.id}`} path={`/${data.id}`} exact>
        <PrettyPrintJson data={data} />
      </Route>
      {hasChildren && data?.children.map((item) => <RecursiveComponentRoute data={item} />)}
    </div>
  );
};
export default RecursiveComponentRoute;
