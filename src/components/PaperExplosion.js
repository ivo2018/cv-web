import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const PaperExplosion = ({ position, color, color2, color3 }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    fullScreen: { enable: false }, // No ocupa toda la pantalla
    particles: {
      number: { value: 130 }, // Aumentamos el número de partículas
         color: { value: [color, color2, color3] }, // Colores amarillos //#FFD700", "#FFFACD", "#F0E68C
      shape: {
        type: "polygon", // Usamos un polígono para simular trozos de papel
        polygon: {
          sides: 4, // Hacemos que sea un cuadrado (pedazo de papel)
        },
      },
      opacity: {
        value: 1,
        anim: { enable: true, speed: 10, opacity_min: 0 },
      },
      size: { value: 5, random: true }, // Hacemos los cuadrados más pequeños
      move: {
        enable: true,
        speed: 10, // Aumento la velocidad para un mayor impulso
        direction: "none", // No forzamos dirección
        random: true,
        straight: false, // Cambiado a false para más dispersión
        outModes: { default: "destroy" },
        angle: { value: [0, 360] }, // Dispersión total (en todas las direcciones)
      },
      life: {
        duration: { sync: true, value: 1.5 },
      },
    },
    emitters: {
      position: { x: position, y: position }, // Inicia dentro de la nota
      rate: { delay: 0, quantity: 120 }, // Emite más partículas al principio
      size: { width: 0, height: 0 },
    },
  };

  return <Particles init={particlesInit} options={particlesConfig} />;
};

export default PaperExplosion;
