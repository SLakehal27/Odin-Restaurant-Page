import { pageLoad } from "./pageload";

const dom = (()=>{
    const createDiv = (className) => {
        const div = document.createElement("div");
        div.classList.add(className);
        return div;
    }

    const createParagraph = (sentence) =>{
        const paragraph = document.createElement("p");
        paragraph.textContent = sentence;
        return paragraph;
    }

    const createSpacedParagraph = (sentence) =>{
        const paragraph = document.createElement("p");
        paragraph.innerHTML = sentence;
        return paragraph;
    }
    const removeBorder = (navElements) =>{
        for(let i = 0; i < navElements.children.length; i++){
            navElements.children[i].style.border = "none";
        }
    }

    const createNav = (buttons) =>{

        const nav = document.createElement("nav");

        for(let i = 0 ; i < buttons.length; i++){
            const button = document.createElement("button");
            button.textContent = buttons[i];
            nav.appendChild(button);

            button.addEventListener('click', () =>
            {
                removeBorder(nav);
                button.style.border = "1px solid white";
                button.style.borderRadius = "15px";
                pageLoad.setMenu(i);
            });

        }
        return nav;
    }

    const createLink = (destination) =>{
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = destination;
        return link;
    }

    const createImage = (src, alt) =>{
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        return img;
    }

    const createHeader2 = (txt) =>{
        const header = document.createElement("h2");
        header.textContent = txt;
        header.className = "section";
        return header;
    }

    return {createDiv, createParagraph, createSpacedParagraph, createHeader2,
            createNav, createLink, createImage};
})();

export {dom}