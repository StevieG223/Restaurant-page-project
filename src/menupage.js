import {addImage} from "./homepage.js";
export {createMenuPage} 

function createMenuPage(){
    let content = Array.from(document.getElementsByClassName("content"))[0];
    content.innerHTML = ""
    content.style.display = "flex";
    content.innerHTML = `
    <div class="write-up-title">MENU</div>
<div class="menu-item">
    <div class="menu-item-pic"></div>
    <div class="menu-item-title">Cowboy Chili con Carne</div>
    <div class="menu-item-price">$8.00</div>
    <div class="menu-item-description">This is chili done the cowboy way! Our Chuckwagon Chili 
        is slow-cooked with tender chunks of beef, smoky sausage, hearty beans, and a blend of bold spices. 
        Served piping hot and topped with shredded cheddar, a dollop of sour cream, and fresh jalapeño slices, 
        it’s comfort food that’ll warm you to your boots. Pair it with a piece of sweet cornbread for the 
        ultimate frontier feast.</div>
</div>`
}