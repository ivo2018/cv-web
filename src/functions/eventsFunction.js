
export function carouselMove(){
    const carousel= document.querySelector(".carousel3");
    if(carousel){
    const dragging=(e)=>{
        console.log(e.pageX);

    }
    carousel.addEventListener("mousemoving",dragging);
}
}

export function titleEffect() {
  /*  var code = document.getElementById('code');*/
    var titlePageName = document.getElementById('content-title');
    var element = document.querySelector('.homePage');

    if (element) {
        element.addEventListener("mousemove", function (event) {
            var shadowX = 0, shadowY = 15;
            var shadowX2 = 0, shadowY2 = 15;
            var shadowX3 = 0, shadowY3 = 15;

      /*      var shadowXcode = 0, shadowYcode = 2;
            var shadowX2code = 0, shadowY2code = 2;
            var shadowX3code = 0, shadowY3code = 2;*/
            
            console.log("el valor de x es:", event.movementX);
            console.log("el valor de y es:", event.movementY);

            // Movimiento en diagonal hacia abajo a la derecha
            if (event.movementX > 0 && event.movementY > 0) {
                shadowX = 15;
                shadowX2 = 27;
                shadowX3 = 20;

                shadowY = 15;
                shadowY2 = 27;
                shadowY3 = 20;

              /*  shadowXcode = 2;
                shadowX2code = 6;
                shadowX3code = 3;

                shadowYcode = 2;
                shadowY2code = 6;
                shadowY3code = 3;*/
            // Movimiento en diagonal hacia abajo a la izquierda
            } else if (event.movementX < 0 && event.movementY > 0) {
                shadowX = -15;
                shadowX2 = -27;
                shadowX3 = -20;

                shadowY = 15;
                shadowY2 = 27;
                shadowY3 = 20;

         /*       shadowXcode = -2;
                shadowX2code = -6;
                shadowX3code = -3;

                shadowYcode = 2;
                shadowY2code = 6;
                shadowY3code = 3;*/
            // Movimiento en diagonal hacia arriba a la derecha
            } else if (event.movementX > 0 && event.movementY < 0) {
                shadowX = 15;
                shadowX2 = 27;
                shadowX3 = 20;

                shadowY = -15;
                shadowY2 = -27;
                shadowY3 = -20;

           /*     shadowXcode = 2;
                shadowX2code = 6;
                shadowX3code = 3;

                shadowYcode = -2;
                shadowY2code = -6;
                shadowY3code = -3;*/
            // Movimiento en diagonal hacia arriba a la izquierda
            } else if (event.movementX < 0 && event.movementY < 0) {
                shadowX = -15;
                shadowX2 = -27;
                shadowX3 = -20;

                shadowY = -15;
                shadowY2 = -27;
                shadowY3 = -20;

           /*     shadowXcode = -2;
                shadowX2code = -6;
                shadowX3code = -3;

                shadowYcode = -2;
                shadowY2code = -6;
                shadowY3code = -3;*/
            // Movimiento solo a la derecha
            } else if (event.movementX > 0 && event.movementY === 0) {
                shadowX = 15;
                shadowX2 = 27;
                shadowX3 = 20;

                shadowY = 0;
                shadowY2 = 0;
                shadowY3 = 0;

             /*   shadowXcode = 2;
                shadowX2code = 6;
                shadowX3code = 3;

                shadowYcode = 0;
                shadowY2code = 0;
                shadowY3code = 0;*/
            // Movimiento solo a la izquierda
            } else if (event.movementX < 0 && event.movementY === 0) {
                shadowX = -15;
                shadowX2 = -27;
                shadowX3 = -20;

                shadowY = 0;
                shadowY2 = 0;
                shadowY3 = 0;

              /*  shadowXcode = -2;
                shadowX2code = -6;
                shadowX3code = -3;

                shadowYcode = 0;
                shadowY2code = 0;
                shadowY3code = 0;*/
            // Movimiento solo hacia abajo
            } else if (event.movementX === 0 && event.movementY > 0) {
                shadowX = 0;
                shadowX2 = 0;
                shadowX3 = 0;

                shadowY = 15;
                shadowY2 = 27;
                shadowY3 = 20;

                /*shadowXcode = 0;
                shadowX2code = 0;
                shadowX3code = 0;

                shadowYcode = 2;
                shadowY2code = 6;
                shadowY3code = 3;*/
            // Movimiento solo hacia arriba
            } else if (event.movementX === 0 && event.movementY < 0) {
                shadowX = 0;
                shadowX2 = 0;
                shadowX3 = 0;

                shadowY = -15;
                shadowY2 = -27;
                shadowY3 = -20;

           /*     shadowXcode = 0;
                shadowX2code = 0;
                shadowX3code = 0;

                shadowYcode = -2;
                shadowY2code = -6;
                shadowY3code = -3;*/
            } else {
                // No hay movimiento
                shadowX = 0;
                shadowX2 = 0;
                shadowX3 = 0;

                shadowY = 0;
                shadowY2 = 0;
                shadowY3 = 0;

          /*      shadowXcode = 0;
                shadowX2code = 0;
                shadowX3code = 0;

                shadowYcode = 0;
                shadowY2code = 0;
                shadowY3code = 0;*/
            }

            // Aplica la sombra con transición
            titlePageName.style.transition = "0.8s all";
            /*ESTE COLOR ME GUSTA : 255, 255, 2, 0.568) */
            titlePageName.style.boxShadow = `${shadowX}px ${shadowY}px 5px -2px rgba(90, 255, 255, 0.568), ${shadowX3}px ${shadowY3}px 4px 1.5px rgba(125, 255, 215, 0.328), ${shadowX2}px ${shadowY2}px 4px 1.5px rgba(255, 255, 255, 0.328)`;

           /* code.style.transition = "0.8s all";
            code.style.textShadow = `${shadowXcode}px ${shadowYcode}px 1px rgba(255, 255, 255, 0.568), ${shadowX3code}px ${shadowY3code}px 1px rgba(2, 255, 255, 0.328), ${shadowX2code}px ${shadowY2code}px 1px rgba(125, 255, 255, 0.328)`;*/
        });
    }
}


/*
export function titleEffect() {
    var code = document.getElementById('coding2');
    var titlePageName = document.getElementById('content-title');
    var element = document.querySelector('.homePage');

    if (element) {
        let shadowX = 0, shadowY = 15;
        let shadowX2 = 0, shadowY2 = 15;
        let shadowX3 = 0, shadowY3 = 15;

        let shadowXcode = 0, shadowYcode = 2;
        let shadowX2code = 0, shadowY2code = 2;
        let shadowX3code = 0, shadowY3code = 2;

        element.addEventListener("mousemove", function (event) {
            const elementRect = element.getBoundingClientRect();
            const centerX = elementRect.left + elementRect.width / 2;
            const centerY = elementRect.top + elementRect.height / 2;

            const offsetX = event.clientX - centerX;
            const offsetY = event.clientY - centerY;

            const factor = 0.04; // Ajusta este factor según sea necesario

            shadowX = offsetX * factor + 2;
            shadowY = offsetY * factor + 2;
            shadowX2 = offsetX * factor * 1.5 + 4;
            shadowY2 = offsetY * factor * 1.5 + 4;
            shadowX3 = offsetX * factor * 1.2 + 2;
            shadowY3 = offsetY * factor * 1.2 + 2;

            shadowXcode = offsetX * factor * 0.1 + 2;
            shadowYcode = offsetY * factor * 0.1 + 2;
            shadowX2code = offsetX * factor * 0.3 + 6;
            shadowY2code = offsetY * factor * 0.3 + 6;
            shadowX3code = offsetX * factor * 0.2 + 3;
            shadowY3code = offsetY * factor * 0.2 + 3;
        });

        function updateShadows() {
            titlePageName.style.boxShadow = `
                ${shadowX}px ${shadowY}px 5px rgba(255, 255, 255, 0.568),
                ${shadowX3}px ${shadowY3}px 4px rgba(2, 255, 255, 0.328),
                ${shadowX2}px ${shadowY2}px 4px rgba(125, 255, 255, 0.328)
            `;

            code.style.textShadow = `
                ${shadowXcode}px ${shadowYcode}px 1px rgba(255, 255, 255, 0.568),
                ${shadowX3code}px ${shadowY3code}px 1px rgba(2, 255, 255, 0.328),
                ${shadowX2code}px ${shadowY2code}px 1px rgba(125, 255, 255, 0.328)
            `;

            requestAnimationFrame(updateShadows);
        }

        requestAnimationFrame(updateShadows);
    }
}

*/

export function closeWindow() {
    var windowAbout = document.getElementById("windowAbout");
    var windowWork = document.getElementById("windowWork");
    if (windowAbout != null) {
        windowAbout.style.opacity = "0";
        windowAbout.style.width = "20%";
        windowAbout.style.transition = "0.2s all"
    }
    if (windowWork != null) {
        windowWork.style.opacity = "0";
        windowWork.style.width = "20%";
        windowWork.style.transition = "0.2s all"

    }
};
export function openWindow() {
    var windowAbout = document.getElementById("windowAbout");
    var windowWork = document.getElementById("windowWork");
    var isMobile = window.innerWidth <= 768;
    if (windowAbout != null) {
        windowAbout.style.opacity = "100%";
        windowAbout.style.width = isMobile ? "92%" : "82%";
       // windowAbout.style.margin = isMobile ?"auto":0;
    }
    if (windowWork != null) {
        windowWork.style.opacity = "100%";
        windowWork.style.width = isMobile ? "92%" : "82%";
       // windowAbout.style.margin = isMobile ?"auto":0;
    }
}



export function FolderDecide(setSelect) {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    var folderSelected;
    folderSelected = document.getElementById(setSelect);
    if (folderSelected) {
        switch (folderSelected) {
            case work:
                folderSelected = work;
                break;
            case about:
                folderSelected = about;
                break;
            case skills:
                folderSelected = skills;
                break;
            case contact:
                folderSelected = contact;
                break;
            default:
                break;
        }
    }
    if (folderSelected) {
        if (work && about && skills && contact && folderSelected != null) {
            folderSelected.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
            folderSelected.style.background = 'rgb(2, 2, 80)';
        }
    }
}

export function opacitySelected(opacitystate, setOpacityState, key) {
    var key1, key2;
    key1 = document.getElementById("key1");
    key2 = document.getElementById("key2");
    var keySelected = document.getElementById(key);
    switch (keySelected) {
        case key1:
            keySelected = key1;
            break;
        case key2:
            keySelected = key2;
            break;

        default:
            break;
    }
    if (key2 != null && key1 != null) {
        if(!opacitystate){
            
            keySelected.style.opacity= '0.5';
            if(keySelected!==key1){
                key1.style.opacity= '0.9';
               
            }else{
                key2.style.opacity= '0.9';
                setOpacityState(true);
            }     
            } 
        }
        if(opacitystate){
            if(keySelected===key1){
                key1.style.opacity="0.5"
            }else{
                key2.style.opacity="0.5"
                key1.style.opacity="0.9"
                setOpacityState(false);
            }
        }
    }

