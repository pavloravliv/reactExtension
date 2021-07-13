import React, { useState } from 'react';
// import useDebouncedEffect from '../hooks/useDebounce';
import RecursiveComponentLink from './RecursiveComponentLink';
// TODO TreeView model
export default function MainNavigation({ data }) {
  const [inputState, setInputState] = useState('');

  const handleChange = (event) => {
    setInputState(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputState} onChange={handleChange} />
      <div>{inputState}</div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data
          .filter((item) => item.id.toLowerCase().includes(inputState.toLowerCase()))
          .map((item) => (
            <li>
              <RecursiveComponentLink name={item.id} items={item.children} />
            </li>
          ))}
      </ul>
    </div>
  );
}
