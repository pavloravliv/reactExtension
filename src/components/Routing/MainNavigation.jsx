/* eslint-disable max-len */
import React, { useState } from 'react';
import Tree from '../tree/Tree';
import './main-navigation.css';
// import flattenArr from '../utils/flattenChildren';
// import useDebouncedEffect from '../hooks/useDebounce';
// import RecursiveComponentLink from './RecursiveComponentLink';
// TODO TreeView model

const includesCaseInsensitive = (innerInputState, innerItemId) => innerItemId.toLowerCase().includes(innerInputState.toLowerCase());
function filterFlatArr(arr, matchString) {
  const result = [];
  arr.forEach((item) => {
    const { id, children } = item;
    if (includesCaseInsensitive(matchString, id)) result.push(item);
    else if (children) result.push(...filterFlatArr(children, matchString));
  });
  return result;
}
export default function MainNavigation({ data }) {
  const [inputState, setInputState] = useState('');

  const filterByChildren = (item) => item.children.some((child) => includesCaseInsensitive(inputState, child.id));

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
        <Tree data={filterFlatArr(data, inputState)} />
      )}
    </div>
  );
}
