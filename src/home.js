import { dom } from "./dom";
import { pageLoad } from "./pageload";
const home = (() =>
{
    const setHomeStyles = () =>{
        const bg = document.querySelector(".backgroundimage");
        const main = document.querySelector(".main");

        bg.style.minHeight = "125vh";
        main.style.gridTemplateRows = "0.3fr 0.2fr 1fr 0.2fr";
        main.style.gridTemplateColumns = "";
        
        main.style.gap = "";
        main.style.height = "75vh";
        main.style.width = "60vh";
        main.style.margin = "-100px 0 0 -225px";
    }

    const loadHome = () =>{
        setHomeStyles();
        pageLoad.setImage('./images/background.jpg');
        pageLoad.main.appendChild(dom.createParagraph("The freshest pasta you'll ever see!"));
        pageLoad.main.appendChild(dom.createParagraph("Cooked with passion since 1932"));
        pageLoad.main.appendChild(dom.createImage("./images/fresh-pasta.jpg","Pasta_Chef"));
        pageLoad.main.appendChild(dom.createParagraph("Order online or come on over!"));
    }

    return {loadHome}
})();

export {home};