import React, { useState, useRef, useEffect } from 'react';

const InteractiveWheel = ({ onColorChange }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const wheelRef = useRef(null);
  const animationRef = useRef(null);
  const [hasSpun, setHasSpun] = useState(false); // Nuevo estado para detectar el primer giro

  // Referencias para valores mutables
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const angleHistoryRef = useRef([]);

  // Constantes físicas
  const FRICTION = 500; // Grados por segundo² (ajustar para mayor/menor fricción)
  const MAX_VELOCITY = 5000; // Velocidad máxima (grados/segundo)
  const MOUSE_SAMPLES = 5; // Muestras para suavizado de velocidad

  const calculateAngle = (x, y) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radians = Math.atan2(y - centerY, x - centerX);
    return radians * (180 / Math.PI);
  };

  // Funciones para eventos de mouse
  const handleMouseDown = (e) => {
    const angle = calculateAngle(e.clientX, e.clientY);
    setStartAngle(angle - rotation);
    setIsDragging(true);
    velocityRef.current = 0;
    angleHistoryRef.current = [];
    cancelAnimation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const angle = calculateAngle(e.clientX, e.clientY);
    const newRotation = angle - startAngle;
    
    // Calcular velocidad con suavizado
    angleHistoryRef.current.push({ time: now, rotation: newRotation });
    if (angleHistoryRef.current.length > MOUSE_SAMPLES) {
      angleHistoryRef.current.shift();
    }
    
    if (angleHistoryRef.current.length > 1) {
      const oldest = angleHistoryRef.current[0];
      const newest = angleHistoryRef.current[angleHistoryRef.current.length - 1];
      const deltaTime = (newest.time - oldest.time) / 1000;
      const deltaRotation = newest.rotation - oldest.rotation;
      velocityRef.current = Math.min(MAX_VELOCITY, Math.max(-MAX_VELOCITY, deltaRotation / deltaTime));
    }

    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    animateInertia();

  };

  // Funciones para eventos touch (mapean a los de mouse)
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    handleMouseUp();
    
  };

  const cancelAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const animateInertia = () => {

    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      let currentVelocity = velocityRef.current;
      const direction = Math.sign(currentVelocity);
      
      // Aplicar fricción
      const newVelocity = currentVelocity - direction * FRICTION * deltaTime;
      
      // Detener cuando la velocidad cambie de dirección o sea muy baja
      if (direction !== Math.sign(newVelocity) || Math.abs(newVelocity) < 1) {
        velocityRef.current = 0;
      } else {
        velocityRef.current = newVelocity;
      }

      // Actualizar rotación
      setRotation(prev => {
        
        const newRotation = prev + currentVelocity * deltaTime;
        
        return newRotation % 360;

      });

      if (Math.abs(velocityRef.current) > 0) {
        setHasSpun(true); // Indicar que ya se giró al menos una vez
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    lastTimeRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => cancelAnimation();
  }, []);

  // Botón adicional para girar (opcional)
  const handleSpinButton = () => {
    setHasSpun(true); // También marcarlo como girado si se usa el botón
    velocityRef.current = (Math.random() < 0.5 ? -1 : 1) * 2000;
    lastTimeRef.current = Date.now();
    animateInertia();
  };
  useEffect(() => {
    if (!hasSpun) return; // Evitar llamar a onColorChange antes del primer giro
    if (velocityRef.current === 0) {
      const colors = ['Azul', 'Rosa', 'Verde', 'Amarillo'];
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const sectionIndex = Math.floor(normalizedRotation / 90);
      const selectedColor = colors[sectionIndex];

      console.log("Color seleccionado:", selectedColor);
      onColorChange(selectedColor); // Pasamos el color a Skill
    }
  }, [rotation, onColorChange,hasSpun]);
  return (
    <div>
      <div
        ref={wheelRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: '300px',
          height: '300px',
          cursor: 'grab',
          userSelect: 'none',
          margin: '50px auto',
          /*filter:'drop-shadow(0px 0px 10px black)',*/
        }}
      >
        <svg viewBox="0 0 200 200" width="300" height="300">
          <g transform={`rotate(${rotation}, 100, 100)`} style={{/*outline:"2px solid silver",// Borde visible
    borderRadius: "20%"*/ }}>
            <path d="M100,100 L100,0 A100,100 0 0,1 200,100 z" fill="#efe4b0"style={{ filter:"drop-shadow(0px 0px 10px rgba(222, 222, 150, 0.29))"}} />
            
            <path d="M100,100 L200,100 A100,100 0 0,1 100,200 z" fill="#b8f2aa" style={{ filter:"drop-shadow(0px 0px 10px rgba(150, 222, 150, 0.36))"}} />
            <path d="M100,100 L100,200 A100,100 0 0,1 0,100 z" fill="#ffd5e5" style={{ filter:"drop-shadow(0px 0px 10px rgba(222, 150, 203, 0.27))"}} />
            <path d="M100,100 L0,100 A100,100 0 0,1 100,0 z" fill="#b3e5ef" style={{ filter:"drop-shadow(0px 0px 10px rgba(150, 214, 222, 0.27))"}} />
          </g>
          <polygon points="95,10 105,10 100,0" fill="black" />
        </svg>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleSpinButton} style={{ padding: '10px 20px', fontSize: '16px',borderRadius:'5px',border:'1px solid' }}>
          Girar
        </button>
      </div>
    </div>
  );
};

export default InteractiveWheel;
