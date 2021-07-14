/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-children-prop */
import React, { useState, useRef } from 'react';
import './tree-node.css';
import { Link } from 'react-router-dom';

const TreeNode = ({ children, idItem }) => {
  const [isActive, setIsActive] = useState(true);
  const clickRef = useRef(null);
  const hasChildren = !!children;
  const handleClick = () => {
    console.log(clickRef.current);
    clickRef.current.focus();
    setIsActive(!isActive);
  };
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
      <Link to={`/${idItem}`} style={{ textDecoration: 'none', width: '100%', height: '100%' }}>
        <div
          ref={clickRef}
          className={`TreeNode ${hasChildren ? 'caret' : ''} ${isActive ? 'caret-down' : ''}`}
          onClick={handleClick}
        >
          {idItem}
        </div>
      </Link>
      {isActive && hasChildren && renderChildren(children)}
    </li>
  );
};

export default TreeNode;
