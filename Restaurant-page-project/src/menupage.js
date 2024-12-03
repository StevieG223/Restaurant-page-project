import {addImage} from "./homepage.js";
import ChilliImage from "./pexels-roger-garcia-1513442-10051775.jpg"
import CoffeeImage from "./hot-chocolate-with-milk-glass-jars.jpg"
export {createMenuPage} 

function createMenuPage(){
    let content = Array.from(document.getElementsByClassName("content"))[0];
    content.innerHTML = ""
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.innerHTML = `
    <div class="write-up-title">MENU</div>
    <div class="menu-item">
    <div class="menu-item-pic-container"></div>
    <div class="menu-item-title">Cowboy Chili con Carne</div>
    <div class="menu-item-price">$8.00</div>
    <div class="menu-item-description">This is chili done the cowboy way! Our Chuckwagon Chili 
        is slow-cooked with tender chunks of beef, smoky sausage, hearty beans, and a blend of bold spices. 
        Served piping hot and topped with shredded cheddar, a slice of avocado, and fresh jalapeño slices, 
        it’s comfort food that’ll warm you to your boots. Pair it with a piece of sweet cornbread or tortilla chips for the 
        ultimate frontier feast.</div>
    </div>
        <div class="menu-item">
    <div class="drink-item-pic-container"></div>
    <div class="menu-item-title">Campfire Coffee</div>
    <div class="menu-item-price">$4.00</div>
    <div class="menu-item-description">Start your day—or end your meal—with a steaming cup of Campfire Coffee. 
    This rich, bold brew is infused with a hint of smoky vanilla, giving it a unique taste that feels like 
    sipping by the fire under a starry sky. Served in a rustic mason jar for that authentic cowboy vibe.</div>
    </div>`;
    addImage("menu-item-pic-container", ChilliImage, "menu-item-pic");
    addImage("drink-item-pic-container", CoffeeImage, "menu-item-pic");
}
