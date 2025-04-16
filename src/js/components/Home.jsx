import React, { useState } from 'react';

function TrafficLight() {
  // Estado que almacena el color actual
  const [color, setColor] = useState("red");

  // Función para cambiar el color del semáforo al hacer clic
  const handleClick = (selectedColor) => {
    setColor(selectedColor); // Cambiar el color del semáforo
  };

  // Función para alternar entre los colores automáticamente
  const handleToggle = () => {
    switch (color) {
      case "red":
        setColor("yellow"); // Si está en rojo, cambia a amarillo
        break;
      case "yellow":
        setColor("green"); // Si está en amarillo, cambia a verde
        break;
      case "green":
        setColor("red"); // Si está en verde, cambia a rojo
        break;
      default:
        setColor("red"); // Predeterminado a rojo por si no está definido
    }
  };

  // Función para hacer que las luces se vuelvan violeta
  const handleViolet = () => {
    setColor("violet"); // Cambia el color del semáforo a violeta
  };

  return (
    <div 
      className="traffic-light-container" 
      style={{
        backgroundColor: "#333", // Fondo oscuro para simular el marco del semáforo
        padding: "20px",
        borderRadius: "15px", // Bordes redondeados
        width: "200px", // Ancho del semáforo
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {/* Luz roja */}
      <div 
        onClick={() => handleClick("red")}
        style={{
          backgroundColor: color === "red" ? "red" : color === "violet" ? "violet" : "gray", // Cambiar a violeta si es el color
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      ></div>

      {/* Luz amarilla */}
      <div 
        onClick={() => handleClick("yellow")}
        style={{
          backgroundColor: color === "yellow" ? "yellow" : color === "violet" ? "violet" : "gray", // Cambiar a violeta si es el color
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      ></div>

      {/* Luz verde */}
      <div 
        onClick={() => handleClick("green")}
        style={{
          backgroundColor: color === "green" ? "green" : color === "violet" ? "violet" : "gray", // Cambiar a violeta si es el color
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      ></div>

      {/* Botón para alternar las luces */}
      <button 
        onClick={handleToggle} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Alternar luces
      </button>

      {/* Botón para cambiar las luces a violeta */}
      <button 
        onClick={handleViolet} 
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#8A2BE2", // Color violeta
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Hacer luces Violeta
      </button>
    </div>
  );
}

export default TrafficLight;
