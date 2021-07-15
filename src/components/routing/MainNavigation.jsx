/* eslint-disable max-len */
import React, { useState } from 'react';
import useGetData from '../hooks/useGetData';
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
export default function MainNavigation() {
  const [inputState, setInputState] = useState('');
  const [selectState, setSelectState] = useState();
  const filterByChildren = (item) => item.children.some((child) => includesCaseInsensitive(inputState, child.id));

  const data = useGetData(selectState);
  const filterFunction = (inputData) => inputData.filter((item) => (item.children !== undefined
    ? includesCaseInsensitive(inputState, item.id) || filterByChildren(item)
    : includesCaseInsensitive(inputState, item.id)));

  const handleChangeInput = (event) => {
    setInputState(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setSelectState(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputState} onChange={handleChangeInput} />

      <select name="categories" id="categories" value={selectState} onChange={handleChangeSelect}>
        <option value="items">Item</option>
        <option value="timers">Timer</option>
      </select>
      <div>{inputState}</div>
      {inputState === '' ? (
        <Tree data={filterFunction(data)} />
      ) : (
        <Tree data={filterFlatArr(data, inputState)} />
      )}
    </div>
  );
}
