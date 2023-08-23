import { min } from "lodash";
import { dom } from "./dom";
import { pageLoad } from "./pageload";

const meal = (title, description, img) =>{

    const createMenuItem = () =>{
        const menuitem = dom.createDiv("menuitem");
        menuitem.appendChild(dom.createImage(img, "menuitem"))
        menuitem.appendChild(dom.createParagraph(title));
        menuitem.appendChild(dom.createSpacedParagraph(description));
        pageLoad.main.appendChild(menuitem);
    }

    return{createMenuItem, title, description, img};
}

const section = (title, meals) =>
{
    const add = () =>{
        pageLoad.main.appendChild(dom.createHeader2(title));
        for(let i = 0; i < meals.length; i++){
            meals[i].createMenuItem();
        }
    }

    return {add};
}

const menu = (() =>
{
    const setMenu = () =>{
        const bg = document.querySelector(".backgroundimage");
        const main = document.querySelector(".main");

        bg.style.minHeight = "370vh";

        main.style.gridTemplateRows = "auto auto";
        main.style.gridTemplateColumns = "repeat(3, 300px)";
        main.style.gap = "2px";
        main.style.height = "320vh";
        main.style.width = "60vw";
        main.style.margin = "-100px 0 0 -475px";
        console.log(main.style);
    }   
 
    const getEntrees = () =>{
        const caprese = meal("Caprese Salad", "Mozzarella, basil and <br> tomatoes.","./images/menu/caprese_salad.jpg");
        const caesar = meal("Caesar Salad", "Grilled chicken, croutons, <br> lettuce and parmesan.", "./images/menu/caesar_salad.jpg");
        const carpaccio = meal("Carpaccio", "Beef, cheese,<br> basil and truffle oil.", "./images/menu/carpaccio.jpg");
        return [caprese,caesar,carpaccio];
    }

    const getMeals = () =>{
        const spaghettiBolognaise = meal("Spaghetti Bolognaise", "Tomato sauce, parmesan,<br> basil and beef.", "./images/menu/bolognaise.jpg");
        const lasagna = meal("Lasagna", "Tomato sauce, <br>mozzarella and basil." ,"./images/menu/lasagna.jpg");
        const risotto = meal("Risotto", "Vegetable broth, white wine,<br> mushrooms, rice and parsley.", "./images/menu/risotto.jpg");
        const seafoodSpaghetti = meal("Seafood Spaghetti","Mussels, tomatoes, bolognaise <br> sauce and a hint of lemon.","./images/menu/seafood_pasta.jpg");
        const margherita = meal("Margherita Pizza","Tomato sauce, mozzarella and <br> basil","./images/menu/pizza.jpg");
        const arancini = meal("Arancini","Our special risotto mixed <br> with mozzarella.","./images/menu/arancini.jpg");
        return [spaghettiBolognaise,lasagna,risotto,seafoodSpaghetti,margherita,arancini];
    }

    const getDeserts = () =>{
        const torta = meal("Torta al limone","Lemon pie.","./images/menu/lemon_pie.jpg");
        const gelato = meal("Gelato","Artisanal ice cream.","./images/menu/gelato.jpg");
        const macedonia = meal("Macedonia di frutta","Fresh fruit salad.","./images/menu/fruit_salad.jpg");
        const tiramisu = meal("Tiramisù","","./images/menu/tiramisu.jpg");
        const pannacotta = meal("Panna Cotta","Fresh strawberries with <br> our homemade custard.","./images/menu/panna_cotta.jpg");
        const espresso = meal("Espresso","Infused locally for <br>the best experience!","./images/menu/espresso.jpg");
        return [torta,gelato,macedonia,tiramisu,pannacotta,espresso];
    }

    const loadMenu = () =>{
        setMenu();
        const menu = [section("-- Per Cominciare / Starters --",getEntrees()),
                      section("-- Primi Piatti / First Meals --", getMeals()), 
                      section("-- Dessert --", getDeserts())];

        for(let i = 0; i < menu.length; i++){
            menu[i].add();
        }
        pageLoad.setImage('./images/wine.jpg');

    }

    return {loadMenu}
})();

export {menu};