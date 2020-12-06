const harmburger=document.querySelector(".hamburger");
const menu=document.querySelector(".menu-navegacion");

harmburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click',(e)=>{
    if(menu.classList.contains('spread')&& e.target!=menu && e.target!=harmburger){
        menu.classList.toggle("spread");
    }
})