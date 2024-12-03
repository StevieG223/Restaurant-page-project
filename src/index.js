import {addImage, createHomepage} from "./homepage.js";
import {createMenuPage} from "./menupage.js";
import {createAboutPage} from "./aboutpage.js";
import Icon from './cowboy-hat-with-moustache-svgrepo-com.png';
import WhiteIcon from "./cowboy-hat-with-moustache-white-svgrepo-com.png";

addImage("cowboy-logo", Icon, "cowboy");
createHomepage();

let menuButton = document.getElementById("menu");
let homeButton = document.getElementById("home");
let aboutButton = document.getElementById("about");

menuButton.addEventListener("click", createMenuPage);
homeButton.addEventListener("click", createHomepage);
aboutButton.addEventListener("click", createAboutPage);

addImage("footer-logo", WhiteIcon, "cowboy-white")