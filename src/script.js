'use strict';


const navbar = document.querySelector(".navbar");

const logo1 = document.querySelector("#logo1");
const banner_logo = document.getElementById("banner_logo");




window.addEventListener("scroll" , function(){
   
        
   
navbar.classList.toggle('sticky', window.scrollY>0);





})








