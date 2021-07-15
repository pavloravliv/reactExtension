import React, { useRef } from 'react';

export default function LeftPanel({ children, leftWidth, setLeftWidth }) {
  const leftRef = useRef();

  React.useEffect(() => {
    if (leftRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftRef.current?.clientWidth);
        return;
      }

      leftRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftRef, leftWidth, setLeftWidth]);

  return <div ref={leftRef}>{children}</div>;
}
