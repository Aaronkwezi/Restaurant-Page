console.log("This is Aaron");
import "./style.css";
import home from "./pages/home.js";
import about from "./pages/about.js";
import menu from "./pages/menu.js";

home();
const content = document.querySelector('#content');
const btn = document.querySelectorAll("nav button");
btn.forEach(btn => { btn.addEventListener("click",()=>{
    content.innerHTML="";
    if(btn.id === 'home')
        home();
    if(btn.id === 'about')
        about();
    if(btn.id === 'menu')
        menu();
})
    
});