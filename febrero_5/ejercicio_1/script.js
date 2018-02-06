"use stric"
const template = document.querySelector('template').content;
const main = document.querySelector('main');
const link = "http://kea-alt-del.dk/t5/api/productlist";
const imglink = "http://kea-alt-del.dk/t5/site/imgs/"
fetch(link).then(result=>result.json()).then(generic_word=>show(generic_word));

function show(generic_word){

    generic_word.forEach(elem=>{
        const clone = template.cloneNode(true);
        clone.querySelector("img").src=imglink +"small/" +elem.image + "-sm.jpg";
        clone.querySelector("h2").textContent=elem.name;
        clone.querySelector("p").textContent=elem.shortdescription;
        clone.querySelector(".price").textContent=elem.price;
        if (elem.discount){
            const newPrice = elem.price - elem.price * elem.discount / 100;
            clone.querySelector(".discount").textContent=newPrice;
            clone.querySelector(".hide").classList.remove("hide");
            clone.querySelector(".price").classList.add("strike");
        }
        if (elem.alcohol){//elem.alcohol = 0; if alcohol = 0, then is false, it wont run;
            console.log(elem);
            const newImage = document.createElement("img");
            newImage.setAttribute("src", "alcohol1.png");
            newImage.setAttribute("alt", "Contains alcohol" + elem.alcohol + "%");
            newImage.setAttribute("title", "Contains alcohol" + elem.alcohol + "%");
            newImage.classList.add("icon_style");
            clone.querySelector(".icons").appendChild(newImage);
        }
           main.appendChild(clone);
    })
}
