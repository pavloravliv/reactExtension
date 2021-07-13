import React from 'react';
import useGetData from '../hooks/useGetData';
import './index.css';
// import Item from './item-representation/Item';
import PrettyPrintJson from './item-representation/PrettyPrintJson';

export default function Index() {
  const inputData = useGetData();
  // const items = data.map(itemData => <Item key={itemData.id} itemData={itemData} />);
  const items = inputData.map((itemData) => <PrettyPrintJson data={itemData} />);

  return (
    <div>
      <div>{items}</div>
    </div>
  );
}
