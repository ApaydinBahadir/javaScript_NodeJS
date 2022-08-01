import { createHtmlElement,content } from "./index.js";

function  menuRender(){
    const Menu = createHtmlElement("div", "center", "center", null);
    const beerMenu = createHtmlElement("div", "beer-menu", "beer-menu", null);
    const noBeerMenu = createHtmlElement("div", "no-beer-menu", "no-beer-menu", null);
    const beerMenuContext = createHtmlElement("p", "beer-menu-context", "beer-menu-context", "Best beer in Middle-Earth and same snack to company");
    const noBeerMenuContext = createHtmlElement("p", "beer-menu-context", "beer-menu-context", "Menu without beer. Not a change.");

    Menu.appendChild(beerMenu);
    Menu.appendChild(noBeerMenu);
    beerMenu.appendChild(beerMenuContext);
    noBeerMenu.appendChild(noBeerMenuContext);
    content.appendChild(Menu);
}

export { menuRender }