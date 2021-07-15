import React from 'react';
import { Link } from 'react-router-dom';

const RecursiveComponentLink = ({ name, items }) => {
  const hasChildren = !!items;
  return (
    <div>
      <Link to={`/${name}`}>
        <div>{name}</div>
      </Link>
      {hasChildren
        && items.map((item) => (
          <RecursiveComponentLink key={item.id} name={item.id} items={item.children} />
        ))}
    </div>
  );
};

export default RecursiveComponentLink;
