/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import FootballPlayer from "./FootballPlayer.js";

const tomBrady = new FootballPlayer(
     "Tom Brady",
     "6'4",
     225,
     12,
     20,
     624,
     203,
     84520,
     3416    
);

const content = `
     <figure class="backpack__image">
       <img src=${tomBrady.image} alt="" />
     </figure>
     <h1 class="backpack__name"></h1>
     <ul class="backpack__features">
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
