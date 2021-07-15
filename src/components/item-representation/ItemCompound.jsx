import React, { useState } from 'react';
import Item from './Item';
import PrettyPrintJson from './PrettyPrintJson';

export default function ItemCompound({ itemData }) {
  const [selectState, setSelectState] = useState('json');
  const handleChangeSelect = (e) => {
    setSelectState(e.target.value);
  };
  return (
    <div>
      <select name="types" id="types" value={selectState} onChange={handleChangeSelect}>
        <option value="json">JSON</option>
        <option value="form">Form</option>
      </select>
      <div>
        {selectState === 'json' ? (
          <PrettyPrintJson itemData={itemData} />
        ) : (
          <Item itemData={itemData} />
        )}
      </div>
    </div>
  );
}
