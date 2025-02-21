import React, { useState, useEffect, useRef } from "react";
import PaperExplosion from "./PaperExplosion"; // Asegúrate de tener el componente PaperExplosion

const ExplosionParticle = ({ children, color, color2, color3 }) => {
  const [explode, setExplode] = useState(false);
  const noteRef = useRef(null);

  // Usamos useEffect para disparar la explosión automáticamente
  useEffect(() => {
    if (noteRef.current) {
      const rect = noteRef.current.getBoundingClientRect();
      setTimeout(() => {
        setExplode({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }, 1000); // Espera 1 segundo (ajusta según lo que necesites)
    }
  }, []); // Este effect se ejecuta solo una vez al renderizar el componente

  return (
    <div>
      {children}
      <div
        ref={noteRef}
        style={{ width: "100px", position: "absolute", left: "0px", right: "0px", bottom: "0px", top: "0px", margin: "auto" }}
      >
     

        {/* La explosión se dispara automáticamente después de un tiempo */}
        {explode && <PaperExplosion position={explode} color={color} color2={color2} color3={color3} />}
      </div>
    </div>
  );
};

export default ExplosionParticle;
