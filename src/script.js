'use strict';





if (screen.width <= 699) {
document.location = "https://www.google.co.in/search?sca_esv=8be23465e86ed254&sxsrf=ADLYWIKAQLRyZKHlLm-JYrOzB21zwpvyGQ:1722760985061&q=error&udm=2&fbs=AEQNm0CvspUPonaF8UH5s_LBD3JPX4RSeMPt9v8oIaeGMh2T2PRrsfVPlQRxSTpQ4UUI6wfsFlEVaMALnJjEZtYpSTLmUV5oGF4fnHSG0LbvLjVKUV0IWX-9yHknaXpsINbxRPK_rD0aGBXyqo-cUa2T6ZySNg4d875n-vXkSutq7bWvEyjXRQuBfWktFSUkoyoeiqhKHNE-BZiSEnsk93CG_Dl8i5jDTw&sa=X&ved=2ahUKEwj0qbDk-NqHAxUMzTgGHf-dDC4QtKgLegQIExAB&biw=1536&bih=742&dpr=1.25";
}



const navbar = document.querySelector(".navbar");

const logo1 = document.querySelector("#logo1");
const banner_logo = document.getElementById("banner_logo");
const studentBtn = document.getElementById('studentTenantBtn');

const homeBtn = document.querySelector('.homeBtn');


window.addEventListener("scroll" , function(){
   
        
   
navbar.classList.toggle('sticky', window.scrollY>0);





})

homeBtn.addEventListener('click' , function(){
  window.scrollY = 0;

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

 ;

createSubtitle(`Comfortable, affordable hostels and PGs near campus. Discover comfortable and affordable hostels and PGs near campus, offering fully furnished rooms and all-inclusive amenities in a secure environment. Your perfect home away from home awaits. Start your hassle-free living experience today!`);
}
else if(i===1){


  createSubtitle("Looking for the perfect roommate? Discover compatible matches for a comfortable and harmonious living experience. Connect with like-minded individuals and create a home environment that suits your lifestyle. Start your search for the ideal roommate today!");
  }
  else if(i===2){


    createSubtitle("Discover the ideal apartment for college students, offering affordable rent, prime locations near campus, and modern amenities. Enjoy a comfortable, convenient, and community-focused living experience. Start your journey to the perfect college home today!");
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
       
          searchWrapper.style.left = 'calc(100% - 300px)';


      }
  });


  closeIcon.addEventListener('click', function() {
      searchWrapper.classList.remove('active');
    

      searchWrapper.style.left = 'calc(100% - 60px)';
      searchInputVal.value = ' ';


  });

 
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && searchWrapper.classList.contains('active')) {
          searchWrapper.classList.remove('active');
       
          searchWrapper.style.left = 'calc(100% - 60px)';
           searchInputVal.value = ' ';
      }
  });

  
  document.addEventListener('click', function(event) {
      if (!searchWrapper.contains(event.target) && searchWrapper.classList.contains('active')) {
          searchWrapper.classList.remove('active');
        
          searchWrapper.style.left = 'calc(100% - 60px)';

          searchInputVal.value = ' ';
      }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.input-holder');
  const input = form.querySelector('.search-input');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = input.value.trim();
      if (query !== '') {
          const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
          window.location.href = searchUrl;
      }
  });

  const searchIcon = document.querySelector('.search-icon');
  const closeIcon = document.querySelector('.close');
  const searchWrapper = document.querySelector('.search-wrapper');

  searchIcon.addEventListener('click', function() {
      searchWrapper.classList.add('active');
      input.focus();
  });

  closeIcon.addEventListener('click', function() {
      searchWrapper.classList.remove('active');
      input.value = '';
  });

  document.addEventListener('click', function(event) {
      if (!searchWrapper.contains(event.target)) {
          searchWrapper.classList.remove('active');
          input.value = '';
      }
  });

  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          searchWrapper.classList.remove('active');
          input.value = '';
      }
  });
});




/////////////

