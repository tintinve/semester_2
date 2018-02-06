for
    (let    i=1; 
            i<11; 
            i=i+1
    )
{
let contenedor_nuevos_elementos = document.querySelector(".contenedor_nuevos");
let template = document.querySelector(".template_para_nuevos").content;
let elementos_nuevos = template.cloneNode(true);
let templateHeader = elementos_nuevos.querySelector("h1");
templateHeader.textContent = "Apollo " + i;
let secondLi = elementos_nuevos.querySelector("li:nth-child(2)");
secondLi.textContent = "Armstrong " + i;
contenedor_nuevos_elementos.appendChild(elementos_nuevos);
    }