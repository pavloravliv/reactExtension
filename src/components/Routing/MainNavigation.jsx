/* eslint-disable max-len */
import React, { useState } from 'react';
import Tree from '../tree/Tree';
import flattenArr from '../utils/flattenChildren';
// import useDebouncedEffect from '../hooks/useDebounce';
// import RecursiveComponentLink from './RecursiveComponentLink';
// TODO TreeView model
export default function MainNavigation({ data }) {
  const [inputState, setInputState] = useState('');

  const includesCaseInsensitive = (innerInputState, innerItemId) => innerItemId.toLowerCase().includes(innerInputState.toLowerCase());

  // const filterByChildren = (item) => item.children.some((child) => includesCaseInsensitive(inputState, child.id));
  const filterByChildren = (item) => item.children.some((child) => includesCaseInsensitive(inputState, child.id));

  // const filterFunction = (inputData) => inputData.filter((item) => includesCaseInsensitive(inputState, item.id));
  const filterFunction = (inputData) => inputData.filter((item) => (item.children !== undefined
    ? includesCaseInsensitive(inputState, item.id) || filterByChildren(item)
    : includesCaseInsensitive(inputState, item.id)));

  const handleChange = (event) => {
    setInputState(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputState} onChange={handleChange} />
      <div>{inputState}</div>
      {inputState === '' ? (
        <Tree data={filterFunction(data)} />
      ) : (
        <Tree data={filterFunction(flattenArr(data))} />
      )}
      {/* <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data
          .filter((item) => item.id.toLowerCase().includes(inputState.toLowerCase()))
          .map((item) => (
            <li>
              <RecursiveComponentLink name={item.id} items={item.children} />
            </li>
          ))}
      </ul> */}
    </div>
  );
}
