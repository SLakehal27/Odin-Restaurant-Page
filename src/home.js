import { dom } from "./dom";
const home = (() =>
{

    const loadHome = () =>{
        const menu = dom.createDiv("menu");
        menu.appendChild(dom.createParagraph("The freshest pasta you'll ever see!"));
        menu.appendChild(dom.createParagraph("Cooked with passion since 1932"));
        menu.appendChild(dom.createImage("./images/fresh-pasta.jpg","Pasta_Chef"));
        menu.appendChild(dom.createParagraph("Order online or come on over!"));
        return menu;
    }

    return {loadHome}
})();

export {home};