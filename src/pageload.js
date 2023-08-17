import { home } from "./home";
import {dom} from "./dom";

const pageLoad = (() =>{
    const content = document.getElementById("content");
    let currentMenu = 0;

    const setMenu = (value) =>{
        currentMenu = value;
    }

    const createHeader = () => {
        const header = dom.createDiv("header");
        const nav = dom.createNav(["Home", "Menu", "Contact"]);
        header.appendChild(dom.createParagraph("Pastaria del villaggio"));
        header.appendChild(nav);
        content.appendChild(header);
    }

    const createFooter = () =>{
        const footer = dom.createDiv("footer");
        const github = dom.createLink("https://github.com/SLakehal27");
        github.appendChild(dom.createImage("./images/github-mark-white.png", "Github"));

        footer.appendChild(dom.createParagraph("Copyright © 2023 SLakehal27"));
        footer.appendChild(github);
        return footer;
    }

    const createBackgroundImage = () => {
        const backgroundImage = dom.createDiv("backgroundimage");
        backgroundImage.append(createFooter());
        content.appendChild(backgroundImage);
    }

    const initializeWebsite = () =>{
        createBackgroundImage();
        createHeader();
        content.appendChild(home.loadHome());
    }

    return {currentMenu, setMenu, initializeWebsite}
})();

export {pageLoad};