import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//import $ from 'jquery';
import folder from "../images/folder.png";
/*import skills from "../images/skills.png";*/
import about from "../images/about.png";

//import win98 from "../images/Icons/win98.png";
//import message from "../images/message.png"

//import marcador from "../images/marcador.png"
/*import close from "../images/close-icon.png";*/
/*import close2 from "../images/About/close2.png";*/
import settings from "../images/About/settings.png";
import world from "../images/Icons/world98.png";

//import SelectionPage from './SelectionPage';
import "../components/About.css";
import { closeWindow, openWindow } from "../functions/eventsFunction";
/*import { titleEffect } from "../functions/eventsFunction";*/

import { FolderDecide } from "../functions/eventsFunction";
import { useMemo } from "react";
import { SketchPicker } from "react-color"; // Importamos la paleta personalizada
//import { Default as ScrollViewComponent } from "./MonitorComponent";
import skills2 from "../images/skills2.png";

const About = (/*{setChange,handleClick}*/) => {
  const navigate = useNavigate();
  
 /* const [/*text, setText] = useState("");
  const [/*text2, setText2] = useState("");
  const [/*text3, setText3] = useState("");
  const [/*text4, setText4] = useState("");
  const [/*text5, setText5] = useState("");
  const [/*text6, setText6] = useState("");*/

  const [isAnimationActive /*, setIsAnimationActive*/] = useState(false);
 /* const [/*isDisintegrating,*setIsDisintegrating] = useState(false);*/
  const [animationTyping, setAnimationTyping] = useState(false);
 
  /*const [animationTyping2, setAnimationTyping2] = useState(false);*/
  const audioElementRef = useRef(null);


  const [showText2, setShowText2] = useState(false);
  const [, setShowText] = useState(false);
  //const iconRef = useRef(null);

  /*const handleClick = () => {
    setIsAnimationActive(true);
  };*/
  /*
  useEffect(() => {
    titleEffect();
  });*/
 
  useEffect(() => {
    const audioElement = audioElementRef.current;

    const fadeOutAudio = (audio, duration) => {
      const initialVolume = audio.volume;
      const fadeSteps = duration / 50; // Número de pasos de fade
      const fadeStep = initialVolume / fadeSteps; // Cambio de volumen por paso
      let currentVolume = initialVolume;

      const fadeInterval = setInterval(() => {
        if (currentVolume > fadeStep) {
          currentVolume -= fadeStep;
          audio.volume = currentVolume;
        } else {
          audio.volume = 0;
          clearInterval(fadeInterval);
          audio.pause();
          audio.currentTime = 0; // Reiniciar el audio al inicio
        }
      }, 50); // Intervalo de tiempo en milisegundos para cada paso de fade

      // Limpiar el intervalo en caso de que se necesite
      return () => clearInterval(fadeInterval);
    };

    if (isAnimationActive) {
      if (audioElement) {
        audioElement.volume = 0.01; // Establece el volumen inicial al máximo
        audioElement.play().catch((error) => {
          console.error("Error playing the audio:", error);
        });

        // Iniciar el fade out 1 segundo antes de pausar el audio
        setTimeout(() => {
          fadeOutAudio(audioElement, 1000); // 1000 ms para el fade out
        }, 8000); // Iniciar el fade out en el segundo 8
      }
    } else {
      // Pausar el audio si la animación no está activa
      if (audioElement && !audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0; // Reiniciar el audio al inicio
      }
    }

    // Limpiar el intervalo si el componente se desmonta
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, [isAnimationActive]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 1000); // Mostrar el texto después de 1 segundo

    return () => clearTimeout(timeout);
  }, []);
  /*useEffect(() => {
    if (animationTyping) {

      changeAudio(1);

      const timer = setTimeout(() => {
        setText("Here are my personal");
        setText2("interests for professional.");
        setText3("purposes you might be  ");
        setText4(" interested in my work or ");
        setText5(
          <>
            my projects let my{" "}
            <i className="betlejuicetextimportant">imagination</i>
          </>
        );
        setText6("my skills. Thank you so much ✋");

        setAnimationTyping2(true);

        //   setText6('');
      }, 19000);

      // Limpiar el temporizador si el componente se desmonta o isAnimationActive cambia
      return () => clearTimeout(timer);
    }
  }, [animationTyping]);
*/
  /*  const texts = [
         "Here are my personal interests. For professional purposes, you might be interested in my work or my skills. Thank you so much.",
         "I'm Ivo, a full stack developer from Buenos Aires. This is my website, a place where I share my projects, let my imagination run wild, and let people know things about me."
     ];*/
  /*const moveAt = (iconElement, pageX, pageY) => {
    iconElement.style.left = pageX - iconElement.offsetWidth / 2 + "px";
    iconElement.style.top = pageY - iconElement.offsetHeight / 2 + "px";
  };*/

  /*const handleMouseDown = (event) => {
    const iconElement = iconRef.current;
    iconElement.style.position = "absolute";
    iconElement.style.zIndex = 1000;

    document.body.append(iconElement);

    const onMouseMove = (event) => {
      moveAt(iconElement, event.pageX, event.pageY);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      handleClick(); // Activar la animación al soltar el icono
      setIsDisintegrating(true); // Iniciar la animación de desintegración
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp, { once: true });

    moveAt(iconElement, event.pageX, event.pageY);
  };*/

  /*const handleTouchStart = (event) => {
    const touch = event.touches[0];
    handleMouseDown(touch);
  };*/

 /* const handleTouchMove = (event) => {
    const touch = event.touches[0];
    moveAt(iconRef.current, touch.pageX, touch.pageY);
  };*/

/*  const handleTouchEnd = () => {
    handleClick();
    setIsDisintegrating(true);
  };*/

  function changeAudio(x) {
    const audioElement = document.getElementById("typing");

    if (x === 0) {
      setTimeout(() => {
        const ButtonCodeElement = document.getElementById("code");
        ButtonCodeElement.style.opacity = 0;
      setAnimationTyping(true);
    }, 1000); // 18000 milliseconds = 18 seconds
 
      if (audioElement) {
        audioElement.volume = 0.3;
      
        audioElement.play().catch((error) => {
          console.error("Error playing the audio:", error);
        });

        setTimeout(() => {
          audioElement.pause();
          audioElement.currentTime = 0; // Reset the audio to the beginning
        }, 22000); // 18000 milliseconds = 18 seconds
      }
    } else {
      audioElement.volume = 0;
    }
  }

  const fullText = useMemo(() => [
    "I'm Ivo, a full stack developer",
    "From Buenos Aires. This is my",
    "website, a place where I share",
    "my projects, let my imagination",
    "run wild, and let people",
    "know things about me"
], []);

  
  const secondText = useMemo(() => [
    "Here are my personal",
    "interests for professional.",
    "purposes you might be  ",
    "interested in my work or ",
    "collaboration."
  ], []);
  
  const [visibleLines, setVisibleLines] = useState([]);
  const [secondVisibleLines, setSecondVisibleLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondCurrentIndex, setSecondCurrentIndex] = useState(0);
  const [allLinesVisible, setAllLinesVisible] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  
  useEffect(() => {
    if(animationTyping)
    if (currentIndex < fullText.length) {
      const baseDelay = 1900;
      const totalDelay = currentIndex === 0 ? 0 : baseDelay - 150 * currentIndex;
      
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, fullText[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, totalDelay);
      
      return () => clearTimeout(timer);
    } else if (currentIndex === fullText.length) {
      setTimeout(() => {
        setAllLinesVisible(true);
       
        setTimeout(() => setShowSecondText(true), 6000); // Espera 2 segundos después de la última línea
      }, 1000);
    }
  } , [fullText,currentIndex,animationTyping]);
  
  useEffect(() => {
    if (showSecondText && secondCurrentIndex < secondText.length) {
      const baseDelay = 1900;
      const totalDelay = secondCurrentIndex === 0 ? 0 : baseDelay - 150 * secondCurrentIndex;
      
      const timer = setTimeout(() => {
        setSecondVisibleLines(prev => [...prev, secondText[secondCurrentIndex]]);
        setSecondCurrentIndex(prev => prev + 1);
      }, totalDelay);
      
      return () => clearTimeout(timer);
    }
  }, [showSecondText, secondCurrentIndex,secondText]);
  

  
  // Ejemplo de uso en React

  
  const ColorPicker = ({ onColorChange, onClose, color: parentColor }) => {
    
    const [localColor, setLocalColor] = useState(parentColor);
  
    const handleColorChange = (newColor) => {
      setLocalColor(newColor.hex);
      onColorChange(newColor.hex); // Se actualiza el color
    };
    console.log("el onclose dice ",selectedColor)
  
    return (
      
      <div
        className="color-picker-container"
        style={{
          display: "inline-block",
          position:"relative",
          zIndex:"100",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
         
          right: "0px",
     
  
        }}
      >
             {/*  <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            margin:"auto",

            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            background: `${selectedColor +"7A" }`,
            color: "white",
            border: "1px solid lightgray ",
            boxShadow:"0px 0px 1.5px 0px",

            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
            marginBottom:"6px",
          }}
        >
          Cerrar
      
        </button>
        
        {/* Paleta SketchPicker */}
        <SketchPicker color={localColor} onChange={handleColorChange} />
  
        {/* Botón para cerrar la paleta */}
 
      </div>
    );
  };
  
  // Componente afectado por el color
  const ColoredComponent = ({ color }) => {
    return (
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          margin: "10px",
          color: "white",
          textAlign: "center",
          display: "none",
        }}
      >
        Componente afectado por el color
      </div>
    );
  };
  function darkenHexColor(hex, percent) {
    // Remover el # si está presente
    hex = hex.replace(/^#/, "");

    // Convertir a valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Aplicar reducción de luminosidad (oscurecer)
    r = Math.max(0, Math.floor(r * (1 - percent / 100)));
    g = Math.max(0, Math.floor(g * (1 - percent / 100)));
    b = Math.max(0, Math.floor(b * (1 - percent / 100)));

    // Convertir de vuelta a HEX y formatear con padding
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
  const [selectedColor, setSelectedColor] = useState(/*"#0BB58E"*//*"#324641"*/"#94B8AE");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const underlineColor = selectedColor;


    const [language, setLanguage] = useState("es");
  
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };
  
  return (
    <div>
      <button id="html-button3">
        <img src={world} onClick={() => closeWindow()} alt=""></img>
      </button>
      <audio
        id="storm"
        src="heavy-storm.mp3"
        ref={audioElementRef}
        preload="auto"
        loop
      ></audio>
      <div class="homePage">
      <div class="regulador-father" style={{ position: "absolute", left: "80%", top: "10%" }}>
      {/* Botón para mostrar la paleta 
      <button
      class="regulador-button"
        onClick={() => setShowColorPicker(!showColorPicker)}
        style={{
          marginBottom: "10px",
          marginLeft:"120px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
  {/*       {/*showColorPicker ? "Ocultar Paleta" : "Mostrar Paleta"}*
         <img class="regulador" src={skills} alt="" style={{height:"auto"}} />
        {/*  <a href="#a"></a>
      </button>
*/}
      {/* Mostrar el selector solo si showColorPicker es true */}
      {showColorPicker && (
        <ColorPicker
          onColorChange={(newColor) => setSelectedColor(newColor)}
          onClose={() => setShowColorPicker(false)}
          color={selectedColor}
        />
      )}

      <ColoredComponent color={selectedColor} />
      <ColoredComponent color={selectedColor} />
    </div>
        <div class="homePage__folders">
          <div
            class="homePage__folders-work"
            onClick={() =>
              navigate("/work") + FolderDecide("work")
            } /*onClick ={ function() { setChange('cameron') }} */
          >
            <img src={folder} alt="folder" />
            <button id="work">
              <a href=" ">Work</a>
            </button>
          </div>
          <div
            class="homePage__folders-skills"
            onClick={() => navigate("/skills") + FolderDecide("skills")}
          >
            <img src={skills2} alt="folder" />
            <button id="skills">
              <a href="/#">Skills</a>
            </button>
          </div>
          
          <div
            class="homePage__folders-about"
            onClick={() => navigate("/") + FolderDecide("about") + openWindow()}
          >
            <img src={about} alt="folder" />
            <button id="about">
              <a href=" ">About</a>
            </button>
          </div>
          
          <div
            class="homePage__folders-message"
            onClick={() => navigate("/contact") + FolderDecide("contact")}
          >
            <img
              src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png"
              alt="folder"
            />
            <button id="contact">
              <a href="/contact">Contact</a>
            </button>
          </div>
       
        </div>
        
        <div>
          
        </div>
        
        
        <div id="windowAbout" class="homePage__about">
          
          <div class="homePage__about-title">
            <a href=" ">About</a>
            <button 
      onClick={toggleLanguage} 
      style={{
        border:`4px outset ${selectedColor}40` ,
        fontSize: "12.5px",
        fontWeight: "bold",
        color:"whitesmoke",
        borderRadius: "6px",
        transition: "background-color 0.2s",
     
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = ""}
      onMouseLeave={(e) => e.target.style.backgroundColor = ""}
    >
      <span style={{ color: language === "es" ? `rgb(210 210 210)` : "#777" }}>ES</span> /  
      <span style={{ color: language === "en" ? `rgb(210 210 210)`: "#777" }}> EN</span>
    </button>
    
            <img src={settings} alt="" /*  onClick={() => closeWindow()} */   onClick={() => setShowColorPicker(!showColorPicker)}    style={{border:`4px outset ${selectedColor}40` }}></img>
          </div>
          <div class="homePage__content">
            <div
              className={`homePage_content-binary ${
                isAnimationActive ? "homePage_content-clickAnimation" : ""
              }`}
            />
            <div class="image-binary-father">
              <img
                class="image-binary"
                style={
                  isAnimationActive
                    ? {
                        animation: "afterAnimationImage 5s linear forwards",
                        animationDelay: "19s",
                      }
                    : {}
                }
                alt=""
              />

              <div class="homePage__content-title" style={{textShadow:`2px -4px ${selectedColor},5px -8px ${selectedColor}40`}}>
              <h1
  id="content-title"
  style={
    isAnimationActive
      ? {
          animation: "psychedelicClickName 5s linear infinite",
        // Quita el !important
        }
        
      : { boxShadow: ` 5px 5px 5px 5px  ${selectedColor}80, 8px 8px 8px 8px  ${selectedColor}40`, "--underline-color": underlineColor}
  }
>
                  Ivo Ortiz
                </h1>
              </div>
              <div class="homePage__content-description">
                <h2 style={{ marginTop: "35px" }}>
                  Full Stack Developer Junior
                </h2>
                {/*<div class="homepage__content-medium">
                          <div clasS="homePage__content-img">
                                <img src={avatarimage} alt="" />
                            </div>
                            </div>*/}

                <div id="code">
                  <button className="coding" onClick={() => changeAudio(0) + setShowText2(true)} style={showText2?{animation:"pushOff 0.25s linear "}:{animation:"code 2s infinite ",border:`2px ${selectedColor} double`}}>
                    <div id="coding2" style={{ display: "inline-block"}}>
                     Start
                      <br></br>
                    {/*   &lt;/&gt; */}
                    </div>
                    <br></br>
                  </button>
                  <button className="coding2"         onClick={() => setShowColorPicker(!showColorPicker)} style={showColorPicker? {animation:"pushOff 0.25s linear " ,border:`2px ${selectedColor} double`}:{animation:"",border:`2px ${selectedColor} double`}}>
                    <div id="coding2" style={{ display: "inline-block"}}>
                     Config
                      <br></br>
                    {/*   &lt;/&gt; */}
                    </div>
                    <br></br>
                  </button>
                  <audio
                    id="typing"
                    src="tyingslow.mp3"
                    preload="auto"
                    loop
                  ></audio>
                </div>
                <div>
                  <div 
                    style={
                      animationTyping
                        ? { display: "inline-block" }
                        : { display: "none" }
                    }
                  >
                    
                     <div className="text-container">
                      
                     <div className="text-box" style={showSecondText ? { display: "none" } : {border:`${selectedColor}33 2px solid`, boxShadow: `0px 0px 0px 2px ${selectedColor}1A`}}>
  {visibleLines.map((line, index) => (
    <p 
      key={index} 
      className={`text-line ${index === visibleLines.length - 1 ? 'highlighted-line' : ''}`}
      style={{color:`${darkenHexColor(selectedColor,40)}`}}
    >
      {line.split('').map((char, charIndex) => {
        const isImaginationWord = 
          line === "my projects, let my imagination" && 
          charIndex >= 20&& 
          charIndex <= 50;
        
        return (
          <span 
            key={charIndex}
            className={`char ${allLinesVisible && isImaginationWord ? 'highlight-char' : ''}`}
            style={{ animationDelay: `${charIndex * 0.03}s` ,"--underline-color": underlineColor }}
          >
            {char}
          </span>
        );
      })}
    </p>
  ))}
</div>

<div className="text-box2" style={showSecondText ? { display: "block",border:`${selectedColor}33 2px solid` ,boxShadow: `0px 0px 0px 2px ${selectedColor}1A`} : {display:"none"}}>
  {secondVisibleLines.map((line, index) => (
    <p 
      key={`second-${index}`} 
      className={`text-line ${index === secondVisibleLines.length - 1 ? 'highlighted-line' : ''}`}
      style={{color:`${darkenHexColor(selectedColor,40)}`}}
    >
      {line.split('').map((char, charIndex) => {
        const isWorkWord = 
          line === "interested in my work or " && 
          charIndex >= 17 && 
          charIndex <= 20;

        return (
          <span 
            key={charIndex}
            className={`char ${allLinesVisible && isWorkWord ? 'highlight-char' : ''}`}
            style={{ animationDelay: `${charIndex * 0.03}s`,"--underline-color": underlineColor}}
          >
            {char}
          </span>
        );
      })}
    </p>
  ))}
</div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
