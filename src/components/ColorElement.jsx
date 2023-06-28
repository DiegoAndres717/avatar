/* eslint-disable react/prop-types */
import { useState } from 'react';

function ColorElement({ color, onSelectColor, onDragStart, onDrop }) {
  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown() {
    onSelectColor(color);
  }

  function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', color);
    onDragStart(color);
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    onDrop(color);
  }

  return (
    <div
      className={`color-element ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: color }}
      onMouseDown={handleMouseDown}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    />
  );
}

export default ColorElement;
