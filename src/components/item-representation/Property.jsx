/* eslint-disable max-len */
import React, { useState } from 'react';

export default function Property({ propertyName, changeRate }) {
  const [inputState, setInputState] = useState('');
  const handleChange = (event) => {
    setInputState(event.target.value);
  };
  const handleButtonPlus = () => setInputState(
    (prevInputState) => +prevInputState + (changeRate === undefined ? 1 : +changeRate),
  );
  const handleButtonMinus = () => setInputState((prevInputState) => +prevInputState - 1);
  return (
    <div>
      <div>{propertyName}</div>
      <input type="text" value={inputState} onChange={handleChange} />
      <button type="button" onClick={handleButtonPlus}>
        +
      </button>
      <button type="button" onClick={handleButtonMinus}>
        -
      </button>
    </div>
  );
}
