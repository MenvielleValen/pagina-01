const harmburger=document.querySelector(".hamburger");
const menu=document.querySelector(".menu-navegacion");

const instagram= document.querySelector(".instagram");
const facebook= document.querySelector(".facebook");
const wsp= document.querySelector(".wsp");



harmburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click',(e)=>{
    if(menu.classList.contains('spread')&& e.target!=menu && e.target!=harmburger){
        menu.classList.toggle("spread");
    }
})