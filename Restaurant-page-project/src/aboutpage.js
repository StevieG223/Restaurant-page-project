import Icon from './cowboy-hat-with-moustache-svgrepo-com.png';
import {addImage} from "./homepage.js";
export {createAboutPage}

function createAboutPage(){
    let content = Array.from(document.getElementsByClassName("content"))[0];
    content.innerHTML = "";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    addImage("content", Icon, "cowboy-large");
    let aboutWriteUp = document.createElement("div");
    aboutWriteUp.classList.add("write-up");
    aboutWriteUp.classList.add("about-writeup");
    aboutWriteUp.innerHTML = `
    <h1 class="write-up-title">The Legend of Rustler’s Roost</h1>
    <p class="write-up-content">Long ago, in a quiet corner of the frontier, there was a watering hole known as Rustler’s 
    Roost. Travelers, cowboys, and settlers alike gathered here after long days on the trail to share stories, laughter, 
    and hearty meals cooked over an open fire. The place was run by a legendary cowboy named Buck Hartley, a former cattle 
    rustler who turned his life around to create a space where folks could find good food and even better company.</p>
        <p class="write-up-content">Buck’s recipes were passed down through the years, with each generation adding their own 
        twist. Tales of his signature chili, smoked meats, and that unforgettable coffee brewed in a tin pot became the stuff 
        of Wild West lore. People came from miles around to experience the magic of Rustler’s Roost—part café, part 
        gathering spot, and entirely full of heart.</p>
        <p class="write-up-content">Fast forward to today, and Rustler’s Roost Café still carries on Buck’s legacy. 
        From the rustic décor to the down-home menu, everything here pays tribute to the spirit of the Old West. 
        Every plate of food, every cup of coffee, and every friendly smile is a reminder of the simple joys that brought 
        people together back in Buck’s day.</p>`;
    content.appendChild(aboutWriteUp);
}