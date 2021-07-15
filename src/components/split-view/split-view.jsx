/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import LeftPanel from './left-panel';
import './split-view.css';

const MIN_WIDTH = 100;

export default function SplitView({ left, right }) {
  const [leftWidth, setLeftWidth] = useState();
  const [separatorXPosition, setSeparatorXPosition] = useState();
  const [dragging, setDragging] = useState(false);
  const splitPaneRef = useRef();

  const onMouseDown = (e) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };
  const onMouseUp = () => {
    setDragging(false);
  };

  const onMove = (clientX) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH);
        return;
      }

      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth;

        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH);
          return;
        }
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseMove = (e) => {
    if (dragging) e.preventDefault();
    onMove(e.clientX);
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
    <div ref={splitPaneRef} className="splitView">
      <LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth} className="leftPane">
        {left}
      </LeftPanel>
      <div className="divider-hitbox" onMouseDown={onMouseDown} />
      {right}
    </div>
  );
}
