import { createHtmlElement,content } from "./index.js";

function navRender(){
    
    const navItems = ["Home", "Menu", "About"];
    
    const ul = createHtmlElement("ul", "nav" , "nav", null);
    content.appendChild(ul);

    navItems.forEach(item => {
        ul.appendChild(createHtmlElement("li", null, null, item));
    });
}


export { navRender }