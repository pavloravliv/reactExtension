/* eslint-disable react/no-children-prop */
import React from 'react';
import useGetData from '../hooks/useGetData';
import TreeNode from './TreeNode';

export default function Tree() {
  const data = useGetData();
  return (
    <div>
      <ul>
        {data.map((item) => (
          <TreeNode idItem={item.id} children={item.children} />
        ))}
      </ul>
    </div>
  );
}
