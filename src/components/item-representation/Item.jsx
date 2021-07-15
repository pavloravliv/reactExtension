/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import Property from './Property';

export default function Item({ itemData }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    for (const key in itemData) {
      if (key === 'change_rate') continue;
      setProperties((prevProperties) => [
        ...prevProperties,
        <div key={key} className="rows ">
          <Property propertyName={key} changeRate={itemData['change-rate']} />
        </div>,
      ]);
    }
  }, [itemData]);
  return (
    <div className="rows ">
      <div className="columns item">{properties}</div>
    </div>
  );
}
