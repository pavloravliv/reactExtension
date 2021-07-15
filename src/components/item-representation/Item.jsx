/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import Property from './Property';

export default function Item({ itemData }) {
  const [properties, setProperties] = useState([]);
  const cr = 'change-rate';
  useEffect(() => {
    for (const key in itemData) {
      if (key === 'change-rate') continue;
      setProperties((prevProperties) => [
        ...prevProperties,
        <div key={key} className="rows ">
          <Property propertyName={key} changeRate={itemData[`${key}`][`${cr}`]} />
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
