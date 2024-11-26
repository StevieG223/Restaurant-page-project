export {createAboutPage}

function createAboutPage(){
    let content = Array.from(document.getElementsByClassName("content"))[0];
    content.innerHTML = ""
    content.style.display = "flex";
}