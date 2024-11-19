import './styles.css';
import Icon from './cowboy-hat-with-moustache-svgrepo-com.png';


const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add("cowboy-logo");

const element = document.getElementById("cowboy-logo");
element.append(myIcon);



function addImage(classToAppend, source){
    const myImage = new Image();
    myImage.src = source;
    element = document.getElementsByClassName(classToAppend);
    element.append(myImage);
}

