"use strict"
const template = document.querySelector('template').content;
const main = document.querySelector('main');
for(
    let i=0; 
    i<10; 
    i++)
{
    const clone = template.cloneNode(true);
    clone.querySelector('h2').textContent += i;
    main.appendChild(clone);
}