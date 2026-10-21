import { useEffect, useState } from "react";
function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervaloId = setInterval(() => {
      setSegundos((segundosActuales) => segundosActuales + 1);
    }, 1000);

    return () => {
      clearInterval(intervaloId);
    };
  }, []);

  return (
    <div>
      <h1>Segundos: {segundos}</h1>
    </div>
  );
}
export default Cronometro;