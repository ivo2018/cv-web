import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import folder from "../images/folder.png"

import about from "../images/about.png"
import close from "../images/close-icon.png";
import software from "../images/Icons/DesarrolloDeSoftware.png";
import juegos from "../images/Icons/ProgramadorDeVideojuegos.png";
import skills from "../images/skills2.png";
import "../components/About.css"
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { FolderDecide } from '../functions/eventsFunction';
import YellowNote from "../images/Skills/YellowNote2.png"
import GreenNote from "../images/Skills/GreenNote2.png"
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import csharp from "../images/csharp.png";
import php from "../images/php.png";
import html from "../images/html.png";
import css from "../images/css.png";
import unity from "../images/unity.png";
import laravel from "../images/laravel.png";
import mysql from "../images/mysql.png";
import sql from "../images/sql.png";
import node from "../images/node.png";
import github from "../images/github.png";
import phpmyadmin from "../images/phpmyadmin.png"
import WhiteNote from "../images/Skills/WhiteNote2.png";
import PinkNote from "../images/Skills/PinkNote2.png"
import vtex from "../images/Skills/vtex.png";
import world from "../images/Icons/world98.png";

//import titulo from "../images/Titulo.png";
//import titulo2 from "../images/Titulo2.png";
import "../components/Skills.css"

import public_note_yellow from "../images/Skills/public_note_yellow2.png";
import public_note_blue from "../images/Skills/public_note_blue2.png";
import public_note_pink from "../images/Skills/public_note_pink2.png";
import public_note_green from "../images/Skills/public_note_green2.png";
import pack_notas from "../images/Skills/pack_notas.png";
import tacho_basura from "../images/Skills/tacho-basura.png";
import InteractiveWheel from './InteractiveWheel';
const Skills = (/*{setChange,handleClick}*/) => {
    //  const [count, setCount] = useState(0);
    const [item2, setItem] = useState(0);
    const [bonus, setBonus] = useState(false);
    const [firstSpin, setFirstSpin] = useState(true); // Estado para la primera vez
    const [notas, setNotas] = useState(false);
    

    const [descripcion, setDescripcion] = useState('');
    const [listaNotas, setListaNotas] = useState([]);
    const [notaPositions, setNotaPositions] = useState({});

    const [notaSeleccionada, setNotaSeleccionada] = useState(null);
    const bigItemRef = useRef(null);
    const bigItemRefNotas = useRef(null);
    const bigItemRefBigNota = useRef(null);

    const handleColorChange = async (color) => { 
        // Verifica que notaSeleccionada tenga un ID válido
    
        if (!notaSeleccionada) return; // Asegúrate de que haya una nota seleccionada
    
        // Actualiza el color de la nota seleccionada en el estado
        const updatedNota = { ...notaSeleccionada, color };
        setNotaSeleccionada(updatedNota); // Actualiza el estado de la nota seleccionada
    
        // Opcional: Si necesitas reflejar el cambio en la lista de notas, también puedes hacer esto
        setListaNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === updatedNota.id ? updatedNota : nota))
        );
    
        try {
            const response = await axios.post('http://localhost:3001/updateColor', {
                color,
                id: notaSeleccionada.id // Asegúrate de tener el ID correcto
            });
            console.log('Color guardado:', response.data);
        } catch (error) {
            console.error('Error guardando color:', error);
        }
    };
    
    

    const handleAddNota = async (e) => {
        e.preventDefault();
        if (descripcion.trim() === '') {
            return;
        }
        try {
          //  const response = await axios.post('https://curriculumvitaeivo-1.onrender.com/addNota', { descripcion });
                      const response = await axios.post('http://localhost:3001/addNota', { descripcion });
         

            console.log('Nota added:', response.data);
            setListaNotas([...listaNotas, response.data]); // Añadir la nueva nota a la lista

            setDescripcion(''); // Limpiar el campo después de agregar la nota
            setNotas(false); // Cerrar el formulario después de agregar la nota
    
        } catch (error) {
            console.error('Error adding nota:', error);
        }
    };

    //const [textnote, setTextNote] = useState("");
    function Nota(item) {
        //   var randomNumber = Math.floor(Math.random() * (6, 14)) + 1;
        var itemNote = document.getElementById(item);
        var itemYellow = document.getElementById("item");
        var itemGreen = document.getElementById("item2");
        var itemWhite = document.getElementById("item3");
        var itemPink = document.getElementById("item4");
        var bigItem = document.getElementById('bigItem');
        var bigItem2 = document.getElementById('bigItemContent');
        if (itemNote) {
            /* if(item==="item"){
                 console.log("item");
                 if (count === 0) {
                         itemNote.style.bottom = -randomNumber + "em";
                         setCount(count + 1);
                    
                 }
                else if (count === 1) {
                     if (item === "item") {
                         itemNote.style.right = -randomNumber + "em";
                         itemNote.style.bottom = -randomNumber + "em";
     
                         setCount(count + 1);
                     }
                 }
              else   if (count === 2) {
                     if (item === "item") {
                         itemNote.style.bottom = "0%";
                         itemNote.style.right = "0%";
                         itemNote.style.left = "0%";
                         itemNote.style.top = "0%";
     
                         itemNote.style.transition = "0.9s all";
     
     
                         setCount(count + 1);
                     }
     
                 }
                else if (count === 3) {
                     if (item === "item") {
                         itemNote.style.transform = "scale(1.5)";
                       //  itemNote.style.rotate = "190deg";
                         itemNote.style.left = "40%";
                         itemNote.style.top = "45%";
                     //    itemNote.style.opacity = "0";
                        itemNote.style.display="none";
                         itemNote.style.transition = "0.5s all";
                         bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                         bigItem.style.display = "block";
                         itemGreen.style.display="block";
                         itemWhite.style.display = "block";
                         itemPink.style.display="block";
                         if (item === "item") {
                             bigItem2.style.backgroundColor = "rgba(219, 198, 8, 0.438)"
                             itemNote.style.left = "0%";
                             itemNote.style.top = "0%";
                             itemNote.style.transform = "scale(1)";
                         }
                           
                         setCount(count + 1);
                     }
                 }
               else  if (count === 4) {
                    
                   //  bigItem.style.animation = "none";
                 //    bigItem.style.opacity = 0;
                     setCount(0);
                     
     
                 }
   
             }*/
            if (item === "item") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemWhite.style.display = "block";
                itemPink.style.display = "block";
                itemGreen.style.display = "block";

            }
            else if (item === "item2") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemWhite.style.display = "block";
                itemPink.style.display = "block";
                itemYellow.style.display = "block";

            }
            else if (item === "item3") {
                //    itemNote.style.rotate = "190deg";
                // itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemGreen.style.display = "block";
                itemPink.style.display = "block";
                itemYellow.style.display = "block";

            }
            else if (item === "item4") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemGreen.style.display = "block";
                itemWhite.style.display = "block";
                itemYellow.style.display = "block";

            }
            if (item === "item") {
                bigItem2.style.backgroundColor = "rgba(219, 198, 8, 0.438)";

                //  bigItem2.style.background="linear-gradient(0deg, rgba(34,193,195,0.43) 0%, rgba(253,187,45,0.43) 100%)"
                //  bigItem2.style.background="linear-gradient(0deg, rgba(219, 198, 8, 0.438) 0%, rgba(255, 255, 233, 0.2) 100%)"

            }
            if (item === "item2") {

                bigItem2.style.backgroundColor = "rgba(0, 198, 8, 0.438)";

                //   bigItem2.style.background="linear-gradient(0deg, rgba(0, 198, 8, 0.438) 0%, rgba(255, 255, 233, 0.2) 100%)"

            }
            if (item === "item3") {

                bigItem2.style.backgroundColor = "rgba(255, 255, 233, 0.438)";
                //     bigItem2.style.background="linear-gradient(0deg, rgba(34,193,195,0.43) 0%, rgba(255, 255, 233, 0.2) 100%)"

            }
            if (item === "item4") {
                bigItem2.style.backgroundColor = "rgba(255, 54, 94, 0.438)";

                //  bigItem2.style.background="linear-gradient(0deg, rgba(255, 54, 94, 0.438) 0%, rgba(255, 255, 233, 0.2) 100%)"
            }




            //  console.log(count);
        }
    }


    const navigate = useNavigate();
    useEffect(() => {
        // Obtener todas las notas al montar el componente
        const fetchNotas = async () => {
            try {
              //  const response = await axios.get('https://curriculumvitaeivo-1.onrender.com/notas');
              const response = await axios.get('http://localhost:3001/notas');

                setListaNotas(response.data);
                const positions = {};
                response.data.forEach(nota => {
                    positions[nota.id] = getRandomPositionStyle();
                });
                setNotaPositions(positions);
            } catch (error) {
                console.error('Error fetching notas:', error);
            }
        };
        fetchNotas();
    }, []);
    function getRandomPositionStyle() {
        const randomTop = Math.floor(Math.random() *75); // Ajusta el rango según sea necesario
        const randomLeft = Math.floor(Math.random() *80);
    
        return {
            position: 'absolute',
            bottom: `${randomTop}%`,
            right: `${randomLeft}%`,
            transform: `rotate(${Math.floor(Math.random() * 5) - 2}deg)`, // Rotación aleatoria
        };
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Verifica si el clic/tacto fue fuera de bigItemRef
            if (bigItemRef.current && !bigItemRef.current.contains(event.target)) {
                setItem(null);
                //setNotaSeleccionada(null);
            }
            if (bigItemRefNotas.current && !bigItemRefNotas.current.contains(event.target)) {
          
            }
            

            // Verifica si el clic/tacto fue fuera de bigItemRefBigNota
            if (bigItemRefBigNota.current && !bigItemRefBigNota.current.contains(event.target)) {
                setItem(null);
            }
    
            // Verifica si el clic/tacto fue en un elemento con la clase "card"
            if (!event.target.closest('.bigItem__content')) {
                // Oculta el elemento bigItem si el clic/tacto no fue en una tarjeta
                const element = document.getElementById('bigItem');
                if (element) {
                    element.style.display = 'none';
                }
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside); // Maneja eventos táctiles
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside); // Limpia eventos táctiles
        };
    }, []);

    const handleColorChange2 = (color) => {
        if (firstSpin) {
            console.log("Ignorando el primer giro para evitar selección automática");
            setFirstSpin(false); // Desactiva la restricción después del primer uso
            return;
        }
        console.log(`Estoy en skill y el color es este ${color}`);
    
        const itemColors = {
            Amarillo: "item",
            Verde: "item2",
            Azul: "item3",
            Rosa: "item4"
        };
    
        // Verifica si el color existe en el objeto
        if (itemColors[color]) {
            const item = document.getElementById(itemColors[color]);
            if (item) {
                item.style.animation = "shain 2s infinite";
            }
        }
    };
    
      
    return (
        <div>    <button id="html-button3">
            <img src={world} onClick={() => closeWindow()} alt="" />
        </button>
            <div class="homePage">
            <div class="regulador-father" style={{ position: "absolute", left: "-16px", top: "70%" }}>
                    <button id="pack_notas" style={{marginLeft:'15px',position:'relative' ,zIndex:'50'}} onClick={() => setNotas(true)} >
                                <img src={pack_notas} alt=""  style={{ width: '3.3em', height: '', marginRight: '10px' }}/>
                                </button>
                                </div>
                <div class="homePage__folders">
                    <div class="homePage__folders-work" onClick={() => navigate("/work") + FolderDecide("work")}   /*onClick ={ function() { setChange('cameron') }} */ >
                        <img src={folder} alt="folder" />
                        <button id="work"  >
                            <a href=" ">
                                Work
                            </a>
                        </button>
                    </div>
                    <div class="homePage__folders-skills" onClick={() => FolderDecide("skills")} >
                        <img src={skills} alt="folder" />
                        <button id="skills" >
                            <a href="/#" >
                                Skills
                            </a>
                        </button>
                    </div>
                    <div class="homePage__folders-about" onClick={() => navigate("/") + FolderDecide("about") + openWindow()}  >
                        <img src={about} alt="folder" />
                        <button id="about"  >
                            <a href=" " >
                                About
                            </a>
                        </button>
                    </div>
                    <div class="homePage__folders-message" onClick={() => FolderDecide("contact")}  >
                        <img src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" alt="folder" />
                        <button id="contact">
                            <a href="/#" >
                                Contact
                            </a>
                        </button>
                    </div>

                                </div>
           
                <div id="windowAbout" class="homePage__about" >
                    <div class="homePage__about-title">
                        <a href=" ">Skills
                        </a>
                     {/*   <img src={close} alt="" onClick={() => closeWindow()}  style={{border:" 4px outset rgba(50, 70, 65, 0.25)" }}></img> */}
                    </div>
                    <div class="homePage__content">
                        <div className="card">
                            <div class="collection">
                                <div id="item" className="collectionItem" onClick={() => Nota("item") + setItem("item")}>
                                    <img src={YellowNote} alt="" />
                                </div>

                                <div id="item2" className="collectionItem" onClick={() => Nota("item2") + setItem("item2")}>
                                    <img src={GreenNote} alt="" />
                                </div>
                                <div id="item3" className="collectionItem" onClick={() => Nota("item3") + setItem("item3")}>
                                    <img src={WhiteNote} alt="" />
                                </div>
                                <div id="item4" className="collectionItem" onClick={() => Nota("item4") + setItem("item4")}>
                                    <img src={PinkNote} alt="" />
                                   
                                </div>

                            </div>
                            <div>
                    <InteractiveWheel onColorChange={handleColorChange2} />
                            </div>
                            <div id="bigItem" className="collectionBigItem" >
                                <div ><button style={{ color: "red",display:"none" }} onClick={() => setBonus(true)} >Bonus</button></div>
                                <div
  className="bigItem__border"
  style={
    bonus
      ? {
          animation: "dash2 10s linear infinite, glow 2s ease-in-out infinite",
        }
      : item2 === "item"
      ? {
          background:
            "linear-gradient(90deg, rgba(255, 246, 202, 0.8) 50%, rgba(90, 86, 86, 0.7) 50%), " +
            "linear-gradient(90deg, rgba(255, 246, 202, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(255, 246, 202, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(255, 246, 202, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%)",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "170px 4px, 170px 4px, 4px 170px, 4px 170px",
          backgroundPosition: "0% 0.1%, 99.9% 99.9%, 0.1% 99.9%, 99.9% 0.1%",
        }
      : item2 === "item2"
      ? {
          background:
            "linear-gradient(90deg, rgba(165, 218, 165, 0.8) 50%, rgba(90, 86, 86, 0.7) 50%), " +
            "linear-gradient(90deg, rgba(165, 218, 165, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(165, 218, 165, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(165, 218, 165, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%)",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "170px 4px, 170px 4px, 4px 170px, 4px 170px",
          backgroundPosition: "0% 0.1%, 99.9% 99.9%, 0.1% 99.9%, 99.9% 0.1%",
        }
      : item2 === "item3"
      ? {
          background:
            "linear-gradient(90deg, rgba(179, 229, 239, 0.8) 50%, rgba(90, 86, 86, 0.7) 50%), " +
            "linear-gradient(90deg, rgba(179, 229, 239, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(179, 229, 239, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(179, 229, 239, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%)",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "170px 4px, 170px 4px, 4px 170px, 4px 170px",
          backgroundPosition: "0% 0.1%, 99.9% 99.9%, 0.1% 99.9%, 99.9% 0.1%",
        }
      : item2 === "item4"
      ? {
          background:
            "linear-gradient(90deg, rgba(255, 213, 229, 0.8) 50%, rgba(90, 86, 86, 0.7) 50%), " +
            "linear-gradient(90deg, rgba(255, 213, 229, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(255, 213, 229, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%), " +
            "linear-gradient(0deg, rgba(255, 213, 229, 0.8) 50%, rgba(70, 70, 70, 0.7) 50%)",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "170px 4px, 170px 4px, 4px 170px, 4px 170px",
          backgroundPosition: "0% 0.1%, 99.9% 99.9%, 0.1% 99.9%, 99.9% 0.1%",
        }
      : {}
  }
>
                                    <div id="bigItemContent" style={{ backgroundColor: item2=== "item" ? "rgb(163 162 95 / 66%)":item2=== "item2" ? "rgb(95 163 117 / 66%)": item2 === "item3" ? "rgb(95 128 163 / 66%)" :item2==="item4" ? "rgb(163 95 109 / 66%)" : "initial"}} class="bigItem__content" ref={bigItemRef} >
                                        {item2 === "item" ? (
                                            <div className="itemTitle" style={{color:"#c6c6c6"}}>
                                                Lenguages
                                            </div>
                                        ) : item2 === "item2" ? (
                                            <div className="itemTitle" style={{color:"#c6c6c6"}}>Tools</div>
                                        ) : item2 === "item3" ? (
                                            <div className="itemTitle" style={{color:"#c6c6c6"}}>Work</div>
                                        ) : item2 === "item4" ? (
                                            <div className="itemTitle" style={{color:"#c6c6c6"}}> Education </div>)
                                            : null}
                                        {item2 === "item" ? (
                                            <div class="text"> 
                                                <div>
                                                    <div style={{
                                                        border: '2px solid #d0d57f',
                                                        backgroundColor: 'rgb(212 215 76 / 49%)',
                                                        padding: '20px',
                                                        fontFamily: 'Arial, sans-serif',
                                                        fontSize: '16px',
                                                        fontStyle: 'italic',
                                                        lineHeight: '1.5',
                                                    }}>
                                                        Knowledge of different programming languages.
                                                        The languages I currently use are:
                                                    </div>
                                                </div>
                                                <div className="iconItem">
                                                    <p>
                                                        <img src={javascript} alt="" />

                                                        JavaScript
                                                    </p>
                                                    <p>
                                                        <img src={csharp} alt="" />

                                                        Csharp

                                                    </p>
                                                    <p>
                                                        <img src={sql} alt="" />
                                                        Sql
                                                    </p>
                                                    <p>
                                                        <img src={node} alt="" />
                                                        NodeJs
                                                    </p>
                                                    <p>
                                                        <img src={php} alt="" />

                                                        Php
                                                    </p>
                                                    <p>
                                                        <img src={html} alt="" />


                                                        Html
                                                    </p>
                                                    <p>
                                                        <img src={css} alt="" />

                                                        Css
                                                    </p>
                                                </div>
                                            </div>

                                        )
                                            : item2 === "item2" ? (
                                                <div class="text" >
                                                    <div>
                                                        <div style={{
                                                            border: '2px solid rgb(196 255 218)',
                                                            backgroundColor: 'rgb(76 215 115 / 49%)',
                                                            padding: '20px',
                                                            fontFamily: 'Arial, sans-serif',
                                                            fontSize: '16px',
                                                            fontStyle: 'italic',
                                                            lineHeight: '1.5',
                                                        }}>
                                                            The tools and frameworks I use are:
                                                        </div>

                                                    </div>
                                                    <div className="iconItem2">
                                                        <p>
                                                            <img src={react} alt="" />
                                                            React
                                                        </p>
                                                        <p>
                                                            <img src={laravel} alt="" />
                                                            Laravel
                                                        </p>
                                                        <p>
                                                            <img src={mysql} alt="" />
                                                            Mysql Workbench
                                                        </p>
                                                        <p>
                                                            <img src={unity} alt="" />
                                                            Unity
                                                        </p>
                                                        <p>
                                                            <img src={github} alt="" />
                                                            GitHub
                                                        </p>
                                                        <p >
                                                            <img src={phpmyadmin} alt="" />
                                                            phpMyAdmin
                                                        </p>
                                                        <p>
                                                            <img src={vtex} alt="" />
                                                            Vtex
                                                        </p>

                                                    </div>
                                                </div>
                                            ) : item2 === "item3" ?
                                            
                                                (
                                                    
                                                    <div class="text"   >
                                                        {/*
                                                        <div style={{

                                                            color: "#17170f",
                                                          

                                                            textShadow: "#798fbb 1px 0.5px",
                                                            display: "inline",
                                                            fontSize:"18px",
                                                            padding: "10px",
                                                            borderRadius: "5px",
                                                        }}> */}
                                                              <div style={{
                                                            border: '2px solid #9cf0f5',
                                                            backgroundColor: 'rgb(76 161 215 / 49%)', // Cambiado a rosa claro
                                                            display:'inline-block',
                                                            fontFamily: 'Arial, sans-serif',
                                                            fontSize: '20px',
                                                            fontStyle: 'italic',
                                                            lineHeight: '1.5',
                                                            width:'75%',
                                                         
                                                            margin: '10px auto'
                                                        }}>
                                                            <p>I am currently working for a construction company called <a href="https://imepho.com.ar" style={{ backgroundColor: '', color: "inherit", textDecoration: "underline" }}>Imepho</a> performing maintenance and development in PHP.</p>
                                                            <p>And I am developing a system for an international brewing company called <a href="https://gluckcerveceria.com" style={{ backgroundColor: '', color: "inherit", textDecoration: "underline" }}>Gluck</a> in PHP.</p>
                                                            <p>In Wordpress I am working on a page called <a href="https://SerHolistico.com.ar" style={{ backgroundColor: '', color: "inherit", textDecoration: "underline" }}>Ser Holistico</a>
                                                            </p>
                                                        </div>

                                                    </div>
                                                ) : item2 === "item4" ? (
                                                    <div class="text" >
                                                        <div style={{
                                                            border: '2px solid #ffc8c8',
                                                            backgroundColor: 'rgb(215 76 76 / 44%)', // Cambiado a rosa claro
                                                            width:'90%',
                                                            fontFamily: 'Arial, sans-serif',
                                                            fontSize: '16px',
                                                            fontStyle: 'italic',
                                                            lineHeight: '1.5',
                                                            margin: '10px auto'
                                                        }}>
                                                            I have experience in creating pages and full stack systems with role systems, permissions, and authentication.
                                                            Also in the creation of 2D and 3D video games.
                                                            <br />
                                                            <br />
                                                            Completed tertiary studies - (Software developer and video game programmer)
                                                        </div>


                                                        {/*<p class="">
                                                        {/*  <img src={titulo2} alt="" /> 
                                                    
                                                    </p> */}
                                                        <p className="icon-container">
                                                            <img src={software} alt="Software Developer Icon" className="icon" />
                                                            <img src={juegos} alt="Game Programer Icon" className="icon" />
                                                        </p>

                                                    </div>
                                                ) : null
                                        }

                                    </div>
                                </div>

                            </div>

                            <div className="pizarra" style={notas ? { display: 'block'  } : { display: 'none' }}>
    <form
        onSubmit={handleAddNota}
        className="formulario"
    >
        <label htmlFor="descripcion" className="label">Descripción</label>
        <input
            type="text"
            name="descripcion"
            className="input"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit" className="boton" style={{background:"#313157"}}>Guardar</button>
    </form>
</div>

                            <div>
    <div className="lista_notas">
        <div >
            {listaNotas.map((nota) => (
                <div key={nota.id} onClick={() => setNotaSeleccionada(nota)} style={notaPositions[nota.id]}>
<img src={
                            nota.color === 'rosa' ? public_note_pink :
                            nota.color === 'yellow' ? public_note_yellow :
                            nota.color === 'celeste' ? public_note_blue :
                            nota.color === 'verde' ? public_note_green :

                            
                            // Agrega aquí otras condiciones para otros colores
                            public_note_yellow // Valor por defecto
                        }  alt="nota" style={{ width: '30px', height: '30px', marginRight: '10px', filter: 'drop-shadow(1.5px 1.2px 1.5px whitesmoke)' }} />
</div>
            ))}
        </div>
    </div>

    {notaSeleccionada && (
        <div id="bigItem2" className="collectionBigItem" ref={bigItemRefNotas}>
        <div className="bigItem__border2">
 
        <div 
  id="bigItemContent2" 
  className="bigItem__content" 
  style={{ 
    backgroundColor: 
      notaSeleccionada.color === 'celeste' ? '#b3e5ef' : 
      notaSeleccionada.color === 'verde' ? '#b8f2aa' : 
      notaSeleccionada.color === 'rosa' ? '#ffd5e5' : 
      '#efe4b0' // Color por defecto
  }}
  onClick={() => console.log(notaSeleccionada.color)}
>
                            <div style={{display:'flex'}}>
                    <div class="bigItemContent2Close" style={{ display:'inline-block' ,marginLeft:'2%', height:'15px' ,width:'20px',marginTop:'6px'}} >
                    <div style={{width:'20px' }} id="tachito_basura" >
                    <img
    style={{
        width: '15px',
        height: '15px',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.2) 0px 1px 2px) ' +
                 'drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 4px) ' +
                 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 3px 6px)'
    }}
    src={tacho_basura}
    alt=""
/>

                    </div>
              
                </div>
                <div class="bigItemContent2Close"  id="colorsito_celeste" style={{    backgroundColor: '#9cceff',display:'inline-block' ,marginLeft:'5%', height:'15px' ,width:'15px',marginTop:'6px',  border: '1.3px solid black',borderRadius:'2px',boxShadow:'0px 0px 1px #c9c9c9'}} >
                <button onClick={() => handleColorChange('celeste')}>
          <div style={{ width: '5px' ,height:'15px'}}></div>
        </button>
              
                </div>
                <div class="bigItemContent2Close"  id="colorsito_rosa" style={{    backgroundColor: '#ff9cff',display:'inline-block' ,marginLeft:'2%', height:'15px' ,width:'15px',marginTop:'6px',  border: '1.3px solid black',borderRadius:'2px',boxShadow:'0px 0px 1px #c9c9c9'}} >
                      <button onClick={() => handleColorChange('rosa')}>

          <div style={{ width: '5px' ,height:'15px'}}></div>
        </button>
              
              
                </div>
                <div class="bigItemContent2Close"  id="colorsito_verde" style={{    backgroundColor: '#9cff9c',display:'inline-block' ,marginLeft:'2%', height:'15px' ,width:'15px',marginTop:'6px',  border: '1.3px solid black',borderRadius:'2px',boxShadow:'0px 0px 1px #c9c9c9'}} >
                <button onClick={() => handleColorChange('verde')}>
          <div style={{ width: '5px' ,height:'15px'}}></div>
        </button>
              
              
                </div>
                <div class="bigItemContent2Close"  id="colorsito_amarillo" style={{    backgroundColor: '#ffff33',display:'inline-block' ,marginLeft:'2%', height:'15px' ,width:'15px',marginTop:'6px',  border: '1.3px solid black',borderRadius:'2px',boxShadow:'0px 0px 1px #c9c9c9'}} >
                <button onClick={() => handleColorChange('amarillo')}>
          <div style={{ width: '5px' ,height:'15px'}}></div>
        </button>
              
              
                </div>
                    <div class="bigItemContent2Close" style={{    backgroundColor: '#efefef',display:'inline-block' ,marginLeft:'62%', height:'15px' ,width:'15px',marginTop:'2px',  border: '1.3px solid black',borderRadius:'2px',boxShadow:'0px 0px 1px #c9c9c9'}}  >
            <button onClick={()=>   setNotaSeleccionada(null)} id="imagen-close">
              <img  src={close} alt="" style={{filter:'drop-shadow(0px 0px 2px rgba(119,119,119,1))',marginBottom:'2px',marginLeft:'-3px' }}  ></img>
                </button>
                </div>
                </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px' }}>
                        <h2
                            style={{
                                fontFamily: "'Patrick Hand', cursive",
                                margin: "0px auto",
                            }}
                        >
                            {notaSeleccionada.descripcion}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>


                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Skills;