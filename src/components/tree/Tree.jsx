/* eslint-disable react/no-children-prop */
import React from 'react';
import TreeNode from './TreeNode';

export default function Tree({ data }) {
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
