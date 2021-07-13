import React, { useState, useEffect } from 'react';
import './index.css';
// import Item from './item-representation/Item';
import PrettyPrintJson from './item-representation/PrettyPrintJson';

export default function Index() {
  const [inputData, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((incomingData) => {
        setData(incomingData);
      });
  }, []);

  // const items = data.map(itemData => <Item key={itemData.id} itemData={itemData} />);
  const items = inputData.map((itemData) => (
    <PrettyPrintJson data={itemData} />
  ));
  return (
    <div>
      <div>
        <div>Items:</div>
        {items}
      </div>
    </div>
  );
}
