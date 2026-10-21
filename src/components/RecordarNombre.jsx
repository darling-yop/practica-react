import { useEffect, useState } from "react";

function RecordarNombre() {
  const [nombre, setNombre] = useState(() => {
    const guardado = localStorage.getItem("nombre");
    return guardado ? guardado : "";
  });

  useEffect(() => {
    localStorage.setItem("nombre", nombre);
  }, [nombre]); 

  return (
    <div>   
      <h1>Hola, {nombre}</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}

export default RecordarNombre;