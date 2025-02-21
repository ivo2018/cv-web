import React, { useState, useRef, useEffect } from "react";


const InteractiveWheel = ({ onColorChange }) => {
    
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const wheelRef = useRef(null);
  const animationRef = useRef(null);
  const [hasSpun, setHasSpun] = useState(false);
  const lineRef = useRef(null);

  const velocityRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const angleHistoryRef = useRef([]);
  const rotationRef = useRef(0);
  const directionRef = useRef(1);

  const FRICTION = 500;
  const MAX_VELOCITY = 5000;
  const MOUSE_SAMPLES = 5;
  const COLLISION_FRICTION = 0.95;
  const WOBBLE_AMPLITUDE = 5;
  const WOBBLE_DURATION = 200;

  const calculateAngle = (x, y) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radians = Math.atan2(y - centerY, x - centerX);
    return radians * (180 / Math.PI);
  };

  const checkCollisions = (prevRotation, currentRotation) => {
    for (let i = 0; i < 8; i++) {
      const prevRectAngle = (prevRotation + i * 45) % 360;
      const currentRectAngle = (currentRotation + i * 45) % 360;

      if (
        (prevRectAngle <= 180 && currentRectAngle > 180) ||
        (prevRectAngle > 180 && currentRectAngle <= 180)
      ) {
        directionRef.current = -Math.sign(velocityRef.current);
        handleCollision();
        velocityRef.current *= COLLISION_FRICTION;
        break;
      }
    }
  };

  const handleCollision = () => {
    if (!lineRef.current) return;

    let start = null;
    const animateWobble = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / WOBBLE_DURATION, 1);

      const angle = 
        directionRef.current *
        WOBBLE_AMPLITUDE * 
        Math.sin(percent * Math.PI * 6) * 
        (2 - percent);

      lineRef.current.setAttribute(
        "transform",
        `rotate(${angle}, 100, 0)`
      );

      if (percent < 1) {
        requestAnimationFrame(animateWobble);
      } else {
        lineRef.current.removeAttribute("transform");
      }
    };
    requestAnimationFrame(animateWobble);
  };


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

    angleHistoryRef.current.push({ time: now, rotation: newRotation });
    if (angleHistoryRef.current.length > MOUSE_SAMPLES) {
      angleHistoryRef.current.shift();
    }

    if (angleHistoryRef.current.length > 1) {
      const oldest = angleHistoryRef.current[0];
      const newest = angleHistoryRef.current[angleHistoryRef.current.length - 1];
      const deltaTime = (newest.time - oldest.time) / 1000;
      const deltaRotation = newest.rotation - oldest.rotation;
      velocityRef.current = Math.min(
        MAX_VELOCITY,
        Math.max(-MAX_VELOCITY, deltaRotation / deltaTime)
      );
    }

    setRotation(newRotation);
    rotationRef.current = newRotation;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    animateInertia();
  };

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
      const newVelocity = currentVelocity - direction * FRICTION * deltaTime;

      if (direction !== Math.sign(newVelocity) || Math.abs(newVelocity) < 1) {
        velocityRef.current = 0;
      } else {
        velocityRef.current = newVelocity;
      }

      const deltaRotation = currentVelocity * deltaTime;
      const prevRotation = rotationRef.current;
      rotationRef.current = prevRotation + deltaRotation;
      
      checkCollisions(prevRotation % 360, rotationRef.current % 360);
      rotationRef.current %= 360;

      setRotation(rotationRef.current);

      if (Math.abs(velocityRef.current) > 0) {
        setHasSpun(true);
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    lastTimeRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => cancelAnimation();
  }, []);

  const handleSpinButton = () => {
    setHasSpun(true);
    velocityRef.current = (Math.random() < 0.5 ? -1 : 1) * 2000;
    lastTimeRef.current = Date.now();
    animateInertia();
  };

  useEffect(() => {
    if (!hasSpun) return;
    if (velocityRef.current === 0) {
      const colors = ["Azul", "Rosa", "Verde", "Amarillo"];
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const sectionIndex = Math.floor(normalizedRotation / 90);
      const selectedColor = colors[sectionIndex];

      console.log("Color seleccionado:", selectedColor);
      onColorChange(selectedColor);
    }
  }, [rotation, onColorChange, hasSpun]);

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
          width: "300px",
          height: "300px",
          cursor: "grab",
          userSelect: "none",
          margin: "50px auto",
        }}
      >
        <svg viewBox="0 0 200 200" width="300" height="300">
          <g transform={`rotate(${rotation}, 100, 100)`}>
            <path d="M100,100 L100,0 A100,100 0 0,1 200,100 z" fill="#efe4b0" />
            <path d="M100,100 L200,100 A100,100 0 0,1 100,200 z" fill="#b8f2aa" />
            <path d="M100,100 L100,200 A100,100 0 0,1 0,100 z" fill="#ffd5e5" />
            <path d="M100,100 L0,100 A100,100 0 0,1 100,0 z" fill="#b3e5ef" />

            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              return (
                <rect
                  key={i}
                  x={100 + Math.cos(angle) * 90 - 2.5}
                  y={100 + Math.sin(angle) * 90 - 2.5}
                  width="3"
                  height="3"
                  fill="grey"
                />
              );
            })}
          </g>

          <line
            ref={lineRef}
            x1="100"
            y1="0"
            x2="100"
            y2="15"
            stroke="grey"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleSpinButton}>Girar</button>
      </div>


  
    </div>
  );
};

export default InteractiveWheel;