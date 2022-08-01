import { createHtmlElement,content } from "./index.js";
import githubIcon from './githubmark.png';
import linkedinIcon from './linkedinmark.png'

function footerRender(){
    const footer = createHtmlElement("div", "footer", "footer", null);
    const ul = createHtmlElement("ul", "footerUL", "footerUL", null);

    const items = ["linkedin", "github"];


    items.forEach(item => {
        const myIcon = new Image(32,32);
        var a = createHtmlElement("img", null, null, item);
        const ahref = createHtmlElement("a", null, null, null);


        if (item == "linkedin"){
            myIcon.src = githubIcon;
            a.src = githubIcon;
            ahref.href = "https://github.com/ApaydinBahadir";
            
        }

        if (item == "github"){
            myIcon.src = linkedinIcon;
            a.src = linkedinIcon;
            ahref.href = "https://www.linkedin.com/in/bahadirapaydin/";
            
        }
        ahref.appendChild(a);
        ul.appendChild(ahref);

    });

    const footerText = createHtmlElement("p", "footer", "footer", "Created by ApaydinBahadir </br>From Tales of Sir Tolkien");
    
    footer.appendChild(ul);
    footer.appendChild(footerText);
    content.appendChild(footer);
}

export { footerRender };