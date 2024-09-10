'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50" />
      <div ref={cursorOutlineRef} className="fixed top-0 left-0 w-[35px] h-[35px] border-2 border-white border-opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50" />
    </>
  );
};

export default CustomCursor;