'use strict';



const navbar = document.querySelector(".navbar");

const logo1 = document.querySelector("#logo1");
const banner_logo = document.getElementById("banner_logo");
const studentBtn = document.getElementById('studentTenantBtn');




window.addEventListener("scroll" , function(){
   
        
   
navbar.classList.toggle('sticky', window.scrollY>0);





})
const cards = document.getElementsByClassName("card-subtitle");
for(let i=0;i<cards.length;i++){


const subtitle = document.getElementsByClassName("card-subtitle")[i];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);




if(i===0){


createSubtitle("But in a much more real sense, I have no idea what I'm doing.");
}
else if(i===1){


  createSubtitle("Manas ");
  }
  else if(i===2){


    createSubtitle("toshniwal");
    }
}

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


const searchInputVal = document.querySelector('.search-input');

document.addEventListener('DOMContentLoaded', function() {
  const searchWrapper = document.querySelector('.search-wrapper');
  const searchIcon = searchWrapper.querySelector('.search-icon');
  const closeIcon = searchWrapper.querySelector('.close');
  const searchInput = searchWrapper.querySelector('.search-input');

  searchIcon.addEventListener('click', function(event) {
      if (!searchWrapper.classList.contains('active')) {
          event.preventDefault(); 
          searchWrapper.classList.toggle('active');
          searchInput.focus(); 
       
          searchWrapper.style.left = 'calc(100% - 260px)';


      }
  });

  // Close search bar on close icon click
  closeIcon.addEventListener('click', function() {
      searchWrapper.classList.remove('active');
    

      searchWrapper.style.left = 'calc(100% - 60px)';
      searchInputVal.value = ' ';


  });

  // Close search bar on ESC key press
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && searchWrapper.classList.contains('active')) {
          searchWrapper.classList.remove('active');
       
          searchWrapper.style.left = 'calc(100% - 60px)';
           searchInputVal.value = ' ';
      }
  });

  // Close search bar on clicking outside
  document.addEventListener('click', function(event) {
      if (!searchWrapper.contains(event.target) && searchWrapper.classList.contains('active')) {
          searchWrapper.classList.remove('active');
        
          searchWrapper.style.left = 'calc(100% - 60px)';

          searchInputVal.value = ' ';
      }
  });
});

