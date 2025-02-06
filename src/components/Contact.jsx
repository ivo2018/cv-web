import React,{useEffect,useState,useRef} from 'react';
import { useNavigate } from "react-router-dom";
import folder from "../images/folder.png"

import about from "../images/about.png"
import close from "../images/close-icon.png";
import skills from "../images/skills2.png";
import "../components/About.css"
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { FolderDecide } from '../functions/eventsFunction';

import emailjs from '@emailjs/browser';
import "../components/Contact.css"
import world from "../images/Icons/world98.png";
const Contact = (/*{setChange,handleClick}*/) => {
    const audioElementRef = useRef(null);
    const [write,setWrite]= useState(false);
    const [send, setSend] = useState(false);
    const navigate = useNavigate();

    const form = useRef();
    const handleClick = () => {
        setSend(true);
      };
      
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lf3ngcf', 'template_jlee5nq', form.current, 'wZZD7cKPU2Je3STpl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    useEffect(() => {

        if (audioElementRef.current) {
            audioElementRef.current.volume=0.1;
          audioElementRef.current.play().catch(error => {
            // Maneja el error de reproducción, si es necesario
            console.error("Error al reproducir el audio:", error);
          });
        }
      },[write] );
      const handleInputChange = (event) => {
        const value = event.target.value;
        if (value === "") {
          setWrite(false);
        } else {
          setWrite(true);
        }
      };
    return (
        <div>
        <button id="html-button3">
   {/*  <audio id="gift" src="gift-box.mp3" ref={audioElementRef} preload="auto" loop></audio>*/} 
        <img src={world} onClick={() => closeWindow()}   alt=""/>
      </button>
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={() => navigate("/work") + FolderDecide("work")}   /*onClick ={ function() { setChange('cameron') }} */ >
                    <img src={folder} alt="folder" />
                    <button id="work"  >
                        <a href=" ">
                            Work
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-skills" onClick={() => navigate("/skills")+FolderDecide("skills")} >
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
                    <a href=" ">Contact
                    </a>
                    <img src={close} alt="" onClick={() => closeWindow()}></img>
                </div>
                <div class="homePage__content">
           
                    <div className="form_content">
                     
                    <p class="form_item">Contact Me</p>
                        <form ref={form} onSubmit={sendEmail} className="field"   style={send ? {
        backgroundColor: 'rgba(49, 50, 61, 0.89)',
        border: '3px solid rgba(12, 12, 73, 0.363)',
        boxShadow: '0px 0px 10px 20px rgba(28, 31, 30, 0.658) inset',
                    transition: 'all 0.1s ease-in-out',
                    animation:'shake2 3s linear forwards'
      } : !write? {
        backgroundImage:"none",
        border:" 1px solid rgba(12, 12, 73, 0.363)",
        animation:"shake 1.2s linear infinite",
        animationDelay:"1s",

      }:{
        
      }}>
     
                         <div class="form_content-info">
                         <label class="divletter" style={send ? {
         animation:'downdivletter  0.2s 0.9s linear forwards',
      } : {}}>
        <i class="letterAnimation" style={send ? {
          display: 'inline-block',
       
          
          animation:'downletter3  2s 0.9s linear forwards',
        } : {}}>N</i>am <i class="letterAnimation" style={send ? {
          display: 'inline-block',
       
          
          animation:'downletter3  2s 0.9s linear forwards',
        } : {}}>e</i>
      </label>
                            <input id="inputWrite" type="text"         onChange={handleInputChange}
  autocomplete="off" name="user_name" style={send ? {
        backgroundColor: 'rgba(49, 50, 61, 0.89)',
        border: '3px solid rgba(12, 12, 73, 0.363)',
        boxShadow: '0px 0px 10px 20px rgba(28, 31, 30, 0.658) inset',
            transition: 'all 0.2s ease-in-out'
      } : {}} />
                            <label><i class="letterAnimation" style={send ? {
          display: 'inline-block',
       
          animation:'downletter2 2s 0.9s linear forwards',
          
        } : {}}>E</i><i class="letterAnimation" style={send ? {
            display: 'inline-block',
         
            animation:'downletter2 2s 0.9s linear forwards',
            
          } : {}}>m</i>a<i class="letterAnimation" style={send ? {
            display: 'inline-block',
         
            animation:'downletter2 2s 0.9s linear forwards',
            
          } : {}}>i</i> <i class="letterAnimation" style={send ? {
            display: 'inline-block',
         
            animation:'downletter2 2s 0.9s linear forwards',
            
          } : {}}>l</i> </label>
                            <input id="inputWrite" onChange={handleInputChange} type="email" autocomplete="off" name="user_email"  style={send ? {
        backgroundColor: 'rgba(49, 50, 61, 0.89)',
        border: '3px solid rgba(12, 12, 73, 0.363)',
        boxShadow: '0px 0px 10px 20px rgba(28, 31, 30, 0.658) inset',
                    transition: 'all 0.2s ease-in-out'
      } : {}}/>
                            <label>Me<i class="letterAnimation" style={send ? {
          display: 'inline-block',
       
          
          animation:'downletter  2s 2s linear forwards',
        } : {}}>s</i><i class="letterAnimation" style={send ? {
            display: 'inline-block',
         
            
            animation:'downletter  2s 2s linear forwards',
          } : {}}>s</i>age</label>
                            <textarea id="inputWrite" name="message"  onChange={handleInputChange}  style={send ? {
        backgroundColor: 'rgba(49, 50, 61, 0.89)',
        border: '3px solid rgba(12, 12, 73, 0.363)',
        boxShadow: '0px 0px 10px 50px rgba(28, 31, 30, 0.658) inset',
                    transition: 'all 0.2s ease-in-out'
      } : {}}/>
                            </div>


                            <div class="box-msj-send-father" >
                            <input id="inputWrite" onChange={handleInputChange} onClick={handleClick}  type="submit" autocomplete="off"  value="Send"   />
                       {/* <div class="box-msj-send"   style={{ display: send ? 'flex' : 'none' }} >
                            <br></br>
                            <i class="box-msj-point ">Send</i>
                            
                              </div> */}
                              </div>
                            {/*}  <div class="div-roses-father">
                              <div class="roses">
                        <img src={roses}/>
                      </div>
                      <div class="roses2">
                        <img src={roses}/>
                      </div>
                      </div>
                */}
                        
                        </form>

                    </div>
                </div>
                
            </div>
        </div>
        
        </div>
    );
};

export default Contact;
