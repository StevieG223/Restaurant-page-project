import './styles.css';
import CowboyImage from "./man-drink-hot-tea-with-green-hill-background.jpg"
export {addImage, createHomepage}

function addImage(elementToAddImageTo, imageSource, imageClass){
    let myImage = new Image();
    myImage.src = imageSource;
    if (imageClass){
        myImage.classList.add(imageClass)
    }    
    let results = Array.from(document.getElementsByClassName(elementToAddImageTo));
    results[0].append(myImage);
}

function createHomepage(){
    let content = Array.from(document.getElementsByClassName("content"))[0];
    content.innerHTML = "";
    addImage("content", CowboyImage, "cowboy-picture");
    let writeUp = document.createElement("div");
    writeUp.classList.add("write-up");
    writeUp.innerHTML = `
    <h1 class="write-up-title">Giddy Up, Partner!</h1>
    <p class="write-up-content">Saddle up and step into a cozy corner of the Old West at The Cowboy Café. 
        Nestled in the heart of the town, our café serves up hearty meals and a warm, friendly atmosphere that 
        makes you feel like you've ridden right into the middle of a cowboy campfire. 
        Whether you're a cowboy, cowgirl, or city slicker, you'll feel right at home here!</p>
        <p class="write-up-content">Step into our rustic saloon-inspired interior, where barnwood walls, 
        vintage cowboy décor, and the sound of country music set the perfect tone. Whether you're here to enjoy a hearty meal, 
        relax with a cup of coffee, or celebrate a special occasion, The Cowboy Café offers an authentic cowboy vibe you 
        won't find anywhere else.</p>
        <p class="write-up-content">We can't wait to see you, partner. So grab your hat, hitch up your horse, and ride on 
        over to The Cowboy Café—where cowboy hospitality and good food meet!</p>`;
    content.style.display = "grid";
    content.appendChild(writeUp);
}
