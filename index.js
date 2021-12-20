const menubtn = document.querySelector('.ham-menu-btn');
const menuitems = document.querySelector('.ham-menu-items');

menubtn.addEventListener('click', function onclick(){

    
    if(menuitems.style.display === "none"){
        menuitems.style.display = "flex";
    }
    else{
        menuitems.style.display = "none";
    }

})
