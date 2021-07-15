/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import LeftPanel from './left-panel';
import './split-view.css';

export default function SplitView({ left, right }) {
  const [leftWidth, setLeftWidth] = useState();
  const [separatorXPosition, setSeparatorXPosition] = useState();
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };
  const onMouseUp = () => {
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + e.clientX - separatorXPosition;
      setSeparatorXPosition(e.clientX);
      setLeftWidth(newLeftWidth);
    }
  };
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });
  return (
    <div className="splitView">
      <LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
        {left}
      </LeftPanel>
      <div className="divider-hitbox" onMouseDown={onMouseDown} />
      {right}
    </div>
  );
}
