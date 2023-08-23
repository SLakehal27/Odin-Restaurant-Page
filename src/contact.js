import { dom } from "./dom";
import { pageLoad } from "./pageload";

const contact = (() => {
    const setContactStyles = () =>{
        const bg = document.querySelector(".backgroundimage");
        const main = document.querySelector(".main");

        bg.style.minHeight = "125vh";
        main.style.gridTemplateRows = "auto auto";
        main.style.gridTemplateColumns = "";
        main.style.textAlign = "center";
    
        main.style.gap = "";
        main.style.height = "75vh";
        main.style.width = "60vh";
        main.style.margin = "-100px 0 0 -225px";
    }

    const loadContact = () =>{
        setContactStyles();
        pageLoad.setImage('./images/background.jpg');
        pageLoad.main.appendChild(dom.createParagraph("Disclaimer: This is not an actual restaurant."));
        pageLoad.main.appendChild(dom.createParagraph("Contact Us!"));
        pageLoad.main.appendChild(dom.createParagraph("Number : 555-555-5555"));
        pageLoad.main.appendChild(dom.createParagraph("Mail : 123fake@mail.com"));
    }

    return {loadContact}
})();

export {contact}