'use strict';




const navbar = document.querySelector(".navbar");

const logo1 = document.querySelector("#logo1");


window.addEventListener("scroll" , function(){
  
navbar.classList.toggle('sticky', window.scrollY>0);

if(this.window.scrollY>0){
logo1.src = "LOGO2.png"
}
else{
    logo1.src = "Logo-trans.png"
}




})

