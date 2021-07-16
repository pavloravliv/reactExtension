/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
import React, { useState, useEffect } from 'react';
import Property from './Property';

export default function Item({ itemData }) {
  const [properties, setProperties] = useState([]);
  const [clearAll, setClearAll] = useState(false);
  useEffect(() => {
    const arrayOfProperties = [];
    for (const key in itemData) {
      if (key === 'change-rate') continue;
      arrayOfProperties.push(
        <div key={key} className="rows ">
          <Property
            propertyName={key}
            changeRate={itemData[`${key}`]['change-rate']}
            clearAll={clearAll}
          />
        </div>,
      );
    }
    setProperties(arrayOfProperties);
  }, [itemData, clearAll]);
  return (
    <div className="rows ">
      <div className="columns item">{properties}</div>
      <button type="button" onClick={() => setClearAll(!clearAll)}>
        reset
      </button>
    </div>
  );
}
