import { navRender } from "./nav";
import { homeRender } from "./home.js";
import { footerRender } from "./footer";
import { menuRender } from "./menu";
import { aboutRender } from "./about";
import "./reset.css"
import "./style.css"

const content = document.getElementById("content");

function createHtmlElement(elType, elId, elClass, elContext){
    const element = document.createElement(elType);
    if (elId) element.id = elId;
    if (elClass) element.classList.add(elClass);
    if (elContext) element.innerHTML = elContext;

    return element;
}

function Home(){
    content.innerHTML= "";
    navRender();
    homeRender();
    footerRender();
}

function Menu(){
    content.innerHTML= "";
    navRender();
    menuRender();
    footerRender();
}

function About(){
    content.innerHTML= "";
    navRender();
    aboutRender();
    footerRender();
}

Home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Home") Home();
    if (target === "Menu") Menu();
    if (target === "About") About();
});




export { createHtmlElement,content};