import { createHtmlElement,content } from "./index.js";

function aboutRender(){
    const about = createHtmlElement("p", "aboutText", "aboutText", "This is a bar in Middle Earth and guess what? The best bar in Middle Earth. You welcome the drink guys.");
    const div = createHtmlElement("div", "center", "center", null);
    
    div.appendChild(about);
    content.appendChild(div);

}

export { aboutRender }