import { createHtmlElement,content } from "./index.js";

function homeRender(){
    const div = createHtmlElement("div", "center", "center", null);
    const header = createHtmlElement("h1", "header", "header", "The Prancing Pony");
    div.appendChild(header);
    const welcomeText = createHtmlElement("h3", "welcomeText", "welcomeText", "When you need warm and Nazgul-free place </br> Welcome");
    div.appendChild(welcomeText);
    content.appendChild(div);
}

export { homeRender }