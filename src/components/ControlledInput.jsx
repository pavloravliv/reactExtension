import React, { useState } from 'react';

function ControlledInput() {
  const [inputState, setInputState] = useState('');
  const handleChange = (event) => {
    setInputState(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputState} onChange={handleChange} />
    </div>
  );
}
export default ControlledInput;
