import { home } from "./home";
import { menu } from "./menu";
import {contact} from "./contact";
import {dom} from "./dom";

const pageLoad = (() =>{
    const content = document.getElementById("content");
    const main = dom.createDiv("main");
    const backgroundImage = dom.createDiv("backgroundimage");
    let currentMenu = 0;

    const createMain = () =>{
        content.appendChild(main);
    }

    const setMenu = (value) =>{
        currentMenu = value;
        clearContent();
        switch(currentMenu){
            case 0:
                home.loadHome();
                break;
            case 1:
                menu.loadMenu();
                break;
            case 2:
                contact.loadContact();
                break;
        }
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
        backgroundImage.append(createFooter());
        content.appendChild(backgroundImage);
    }

    const initializeWebsite = () =>{
        createBackgroundImage();
        createHeader();
        createMain();
        home.loadHome();
    }

    const clearContent = () => {
        main.innerHTML = "";
    }

    const setImage = (link) =>{
        backgroundImage.style.backgroundImage = "url(" + link + ")"; 
    }

    return {main,currentMenu, setMenu, setImage, initializeWebsite}
})();

export {pageLoad};