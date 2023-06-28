import { useState } from 'react';
import Silhouette from './components/Silhouette';
import ColorElement from './components/ColorElement';
import './App.css';

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const [selectedColors, setSelectedColors] = useState([]);
  const [draggedColor, setDraggedColor] = useState(null);

  function handleSelectColor(color) {
    setSelectedColors((prevSelectedColors) => [...prevSelectedColors, color]);
  }

  function handleDragStart(color) {
    setDraggedColor(color);
  }

  function handleDrop(color) {
    if (draggedColor) {
      setSelectedColors([draggedColor, color]);
      setDraggedColor(null);
    }
  }

  function calculateMixedColor() {
    if (selectedColors.length === 0) {
      return 'transparent';
    }

    const colorMap = {
      red: { r: 255, g: 0, b: 0 },
      orange: { r: 255, g: 165, b: 0 },
      yellow: { r: 255, g: 255, b: 0 },
      green: { r: 0, g: 128, b: 0 },
      blue: { r: 0, g: 0, b: 255 },
      purple: { r: 128, g: 0, b: 128 },
    };

    const mixedColor = selectedColors.reduce(
      (acc, color) => ({
        r: acc.r + colorMap[color].r,
        g: acc.g + colorMap[color].g,
        b: acc.b + colorMap[color].b,
      }),
      { r: 0, g: 0, b: 0 }
    );

    mixedColor.r = Math.round(mixedColor.r / selectedColors.length);
    mixedColor.g = Math.round(mixedColor.g / selectedColors.length);
    mixedColor.b = Math.round(mixedColor.b / selectedColors.length);

    return `rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`;
  }

  return (
    <div>
      <h1>Juego de Mezcla de Colores</h1>
      <div className='content'>
        <Silhouette color={calculateMixedColor()} shadowColor={calculateMixedColor()} />
        <div>
          {colors.map((color) => (
            <ColorElement
              key={color}
              color={color}
              onSelectColor={handleSelectColor}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
