/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import './tree-node.css';

const TreeNode = ({ children, idItem }) => {
  const [isActive, setIsActive] = useState(true);

  const hasChildren = !!children;
  const renderChildren = (childrenProp) => (
    <ul>
      {childrenProp.map((nodeProps) => {
        const { id, children } = nodeProps;
        return <TreeNode key={id} idItem={id} children={children} />;
      })}
    </ul>
  );

  return (
    <li>
      <div
        className={`TreeNode ${hasChildren ? 'caret' : ''} ${isActive ? 'caret-down' : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        {idItem}
      </div>
      {isActive && hasChildren && renderChildren(children)}
    </li>
  );
};

export default TreeNode;
