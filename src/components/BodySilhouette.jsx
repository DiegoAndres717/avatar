import React from 'react';

// eslint-disable-next-line react/prop-types
function BodySilhouette({ selectedColors }) {
  const getShadowColor = () => {
    // Lógica para mezclar los colores seleccionados y obtener el color de sombra
    // eslint-disable-next-line react/prop-types
    if (selectedColors.length === 0) {
      return 'gray'; // Si no se han seleccionado colores, se muestra una sombra gris por defecto
    // eslint-disable-next-line react/prop-types
    } else if (selectedColors.length === 1) {
      return selectedColors[0]; // Si solo se ha seleccionado un color, se muestra ese color como sombra
    } else {
      // Si se han seleccionado más de un color, se realiza la mezcla
      // eslint-disable-next-line no-undef
      const colorValues = selectedColors.map(color => parseColor(color));
      const mixedColor = mixColors(colorValues);
      return getColorString(mixedColor);
    }
  };

  // Resto del código para parseColor, mixColors y getColorString...

  return (
    <div
      style={{
        width: '200px',
        height: '400px',
        backgroundColor: 'black',
        boxShadow: `0 0 10px ${getShadowColor()}`,
      }}
    ></div>
  );
}

export default BodySilhouette;
