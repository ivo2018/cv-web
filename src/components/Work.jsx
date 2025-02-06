
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import $ from 'jquery'; 
import folder from "../images/folder.png"
import skills from "../images/skills2.png";
import about from "../images/about.png"
//import message from "../images/message.png"
import "../components/Work.css"
import close from "../images/close-icon.png";
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { FolderDecide } from '../functions/eventsFunction';
import list from '../lists/listsCarouselDividerWeb';
import list2 from '../lists/listsCarouselDividerGames';
import world from "../images/Icons/world98.png";

const Work = (/*{handleClick,setChange}*/) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [text, setText] = useState('descripcion');
    const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;
    var isDragStart = false, prevPageX, prevScrollLeft;
    function carouselMove(){
        const carousel= document.querySelector(".carousel3");
        if(carousel){
        let isDragStart=false,prevPageX,prevScrollLeft;
        
        const dragStart=(e)=>{
            isDragStart=true;
            prevPageX=e.pageX;
            prevScrollLeft=carousel.scrollLeft;
        }
        if(carousel){
        const dragging=(e)=>{
            if(!isDragStart) return;
            e.preventDefault();
            let positionDiff= e.pageX-prevPageX;
            carousel.scrollLeft= prevScrollLeft-positionDiff;
        }   
        const dragStop= () =>{
            isDragStart=false;
        }
        carousel.addEventListener("mousedown",dragStart);
        carousel.addEventListener("mousemove",dragging);
        carousel.addEventListener("mouseup",dragStop);
    }
}
    }

    function descripcionButton1() {
        var button1, button2, descripcion;
        button1 = document.getElementById('descripcion-button1');
        button2 = document.getElementById('descripcion-button2');
        descripcion = document.getElementById('descripcion-id');

        if (button1 && button2 && descripcion != null) {

            button1.style.background = "rgba(255, 253, 253, 0.349)";
            button1.style.color = "rgba(0, 0, 0, 0.747)";
            button1.style.fontWeight = "bold";
            button1.style.border="2px solid   rgba(255, 253, 253, 0.349)"
            button2.style.border="2px solid grey"
            button2.style.background = 'none';
            button2.style.fontWeight = '500';
            descripcion.style.background = "rgba(255, 253, 253, 0.349)";
        }
    }
    function descripcionButton2() {
        var button1, button2, descripcion;
        button1 = document.getElementById('descripcion-button1');
        button2 = document.getElementById('descripcion-button2');
        descripcion = document.getElementById('descripcion-id');
        if (button1 && button2 && descripcion != null) {

            button2.style.background = "rgba(255, 253, 253, 0.349)";
            button1.style.background = 'none';
            button2.style.color = "rgba(0, 0, 0, 0.747)";
            button2.style.border="2px solid   rgba(255, 253, 253, 0.349)"
            button1.style.border="2px solid grey"
            button2.style.fontWeight = "bold";
            button1.style.fontWeight = '500';
            descripcion.style.background = "rgba(255, 253, 253, 0.349)";

        }
    }
    function firstIcon(){
        const carousel= document.querySelector(".carousel3");
        if(carousel){
        const firstImg=carousel.querySelectorAll("img")[0];
        if(isMobile){
        let firstImgWidth=firstImg.clientWidth+20;

            carousel.scrollLeft+=firstImgWidth;
       
        }else{
            let firstImgWidth=firstImg.clientWidth+245;

            carousel.scrollLeft+=firstImgWidth;
        }
    }
    }
    function secondIcon(){
        const carousel= document.querySelector(".carousel3");
        if(carousel){
        const firstImg=carousel.querySelectorAll("img")[0];
        if(window.innerWidth>1000){
        let firstImgWidth=firstImg.clientWidth+245;
            carousel.scrollLeft+=-firstImgWidth;
        }else{
            let firstImgWidth=firstImg.clientWidth+20;
            carousel.scrollLeft+=-firstImgWidth;
        }
        }
    }
    function draggindDown() {
        var carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.addEventListener("mousedown",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.pageX;
                    prevScrollLeft = carousel.scrollLeft;
                });
            carousel.addEventListener("touchstart",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.touches[0].pageX;
                    prevScrollLeft = carousel.scrollLeft;

                });

        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mousedown",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.pageX;
                    prevScrollLeft = carousel2.scrollLeft;

                });
            carousel2.addEventListener("touchstart",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.touches[0].pageX;
                    prevScrollLeft = carousel2.scrollLeft;

                });

        }
    }
    function dragging() {
        var carousel = document.querySelector(".carousel");

        if (carousel) {
            carousel.addEventListener("mousemove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel.classList.add("dragging");
                    let positionDiff = event.pageX - prevPageX;
                    carousel.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
            carousel.addEventListener("touchmove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel.classList.add("dragging");
                    let positionDiff = event.touches[0].pageX - prevPageX;
                    carousel.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mousemove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel2.classList.add("dragging2");
                    let positionDiff = event.pageX - prevPageX;
                    carousel2.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
            carousel2.addEventListener("touchmove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel2.classList.add("dragging2");
                    let positionDiff = event.touches[0].pageX - prevPageX;
                    carousel2.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
        }
    }
    function dragStoped() {

        var carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.addEventListener("mouseup",
                function (event) {
                    isDragStart = false;
                    carousel.classList.remove("dragging");
                });
        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mouseup",
                function (event) {
                    isDragStart = false;
                    carousel2.classList.remove("dragging2");
                });
        }
    }
    useEffect(() => {
        console.log(product);

      dragging(); draggindDown(); dragStoped(); carouselMove();
    });
    return (
        <div>    <button id="html-button3">
        <img src={world} onClick={() => closeWindow()} alt=""/>
      </button>
        <div class="homePage" >
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={() => navigate("/work") + FolderDecide("work") + openWindow()}   >
                    <img src={folder} alt="folder" />
                    <button id="work" >
                        <a href=" " >
                            Work
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-skills" onClick={() => navigate("/skills")+FolderDecide("skills")} >
                    <img src={skills} alt="folder" />
                    <button id="skills">
                        <a href="/#" >
                            Skills
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-about" /* onClick ={ function() { setChange('false')}}*/ onClick={() => navigate("/") + FolderDecide("about")} >
                    <img src={about} alt="folder" />
                    <button id="about"   >
                        <a href=" "  >
                            About
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-message" onClick={() => navigate("/contact")+FolderDecide("contact")} >
                    <img  src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" alt="folder" /> 
                    <button id="contact">
                        <a href="/contact" >
                            Contact
                        </a>
                    </button>
                </div>
            </div>
            <div id="windowAbout" class="homePage__about" >
                <div class="homePage__about-title">
                    <a href=" # ">Work
                    </a>
                    <img src={close} alt="" onClick={() => closeWindow()}></img>
                </div>
                <div class="homePage__content">
                    <div class="homePage_content-background" />
                    <div class="homePage__content_Divider">
                        <div class="homePage__content_Divider-part1">
                            <div class="homePage__content_Divider-part1-first">
                                <div class="homePage__content_Divider-part1-first-title">
                                    <a href=" # " class="title1">  Projects Web</a>

                                    <div class="wrapper">
                                        <div class="carousel">
                                            {list.map((producto) => (
                                                <div class="carousel_div" onClick={() => setProduct(producto.id)} >
                                                    <a href=" # "> {producto.name} </a>
                                                    <img src={producto.photo} alt="img" draggable="false" title="value" style={{objectFit:"scale-down"}} ></img>
                                                </div>

                                            ))}


                                            {/*  <img src={photo} alt="img" draggable="false" />
                                             */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="homePage__content_Divider-part1-second">
                                <div class="homePage__content_Divider-part1-first-title2">
                                    <a href=" # " class="title2">
                                        Projects Games
                                    </a>
                                    <div class="wrapper2">
                                        <div class="carousel2">
                                            {list2.map((producto) => (
                                                <div class="carousel_div2" onClick={() => setProduct(producto.id)}>
                                                    <a href=" # "> {producto.name} </a>
                                                    <img src={producto.photo} alt="img" draggable="false" title="value" style={{objectFit:"scale-down"}}></img>
                                                </div>

                                            ))}
                                            {/*
                                            <img src={photo2} alt="img" draggable="false" />
                                             */}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="homePage__content_Divider-part2">

                            <div class="homePage__content_Divider-part2-Child">
                                <div class="homePage_content_Divider_part2-Child_contenedor">
                                    <div class="homePage__content_Divider-part2-Child_proyects">
                                        <div class="homePage__content_Divider-part2-Child_proyects-title">
                                            
                                            <a href=" ">  Title</a>
                                            <span class="content_spanBackground"> </span>
                                            <div class="homePage__content_Divider-part2-Child_proyects-content">
                                                {list2.map((producto) => (
                                                    producto.id === product ?
                                                        <div class="div-map_content">
                                                            <div class="wrapper3">
                                                                <i id="left" class="fa-solid fa-less-than"  onClick={()=>secondIcon() }></i>
                                                                <div class="carousel3">
                                                                    <img src={producto.photo1} alt="img" draggable="false" title="value"></img>
                                                                    <img src={producto.photo2} alt="img" draggable="false" title="value"></img>
                                                                    <img src={producto.photo3} alt="img" draggable="false" title="value"></img>
                                                                    <img src={producto.photo4} alt="img" draggable="false" title="value"></img>
                                                                </div>
                                                                <i id="right"class="fa-solid fa-greater-than" onClick={()=>firstIcon() }></i>
                                                            </div>
                                                            <div class="nav_descripcion">

                                                                <li>
                                                                    <button class="nav_descripcion-button1" id="descripcion-button1" onClick={() => descripcionButton1() + setText("descripcion")}>Overview</button>
                                                                    <button class="nav_descripcion-button2" id="descripcion-button2" onClick={() => descripcionButton2() + setText('details')}>Details</button>
                                                                </li>
                                                                <div class="descripcion">
                                                                {(text === "descripcion" ? <a href=" # " id="descripcion-id"> {producto.description} </a> : text === "details" ? <a href=" # " id="descripcion-id"> {producto.detalles} </a> : null)}
                                                                </div>                                              

                                                            </div>
                                                        </div>
                                                        : null
                                                ))}
                                                {list.map((producto) => (
                                                   producto.id === product ?
                                                   <div class="div-map_content">
                                                       <div class="wrapper3">
                                                           <i id="left" class="fa-solid fa-less-than"  onClick={()=>secondIcon() }></i>
                                                           <div class="carousel3">
                                                               <img src={producto.photo1} alt="img" draggable="false" title="value"></img>
                                                               <img src={producto.photo2} alt="img" draggable="false" title="value"></img>
                                                               <img src={producto.photo3} alt="img" draggable="false" title="value"></img>
                                                               <img src={producto.photo4} alt="img" draggable="false" title="value"></img>
                                                       
                                                           </div>
                                                           <i id="right"class="fa-solid fa-greater-than" onClick={()=>firstIcon() }></i>
                                                       </div>
                                                       <div class="nav_descripcion">

                                                           <li>
                                                               <button class="nav_descripcion-button1" id="descripcion-button1" onClick={() => descripcionButton1() + setText("descripcion")}>Overview</button>
                                                               <button class="nav_descripcion-button2" id="descripcion-button2" onClick={() => descripcionButton2() + setText('details')}>Details</button>
                                                           </li>
                                                           <div class="descripcion">
                                                           {(text === "descripcion" ? <a href=" # " id="descripcion-id"> {producto.description} </a> : text === "details" ? <a href=" # " id="descripcion-id"> {producto.detalle} </a> : null)}
                                                           </div>                                              

                                                       </div>
                                                   </div>
                                                   : null
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
        </div>
    );
};

export default Work;