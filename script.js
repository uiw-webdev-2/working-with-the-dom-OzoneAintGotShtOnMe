/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import FootballPlayer from "./FootballPlayer.js";

const tomBrady = new FootballPlayer(
     "Tom Brady",
     "August 3, 1977 15:00:00 PST",
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
     <h1 class="backpack__name">${tomBrady.name}</h1>
     <h2 class="backpack__birthday>${tomBrady.birthday}</h2>
     <ul class="backpack__features">
          <li class="packprop backpack__volume">Height:<span>${tomBrady.height}</span></li>
          <li class="packprop backpack__color">Weight:<span>${tomBrady.weight}</span></li>
          <li class="packprop backpack__number">Number:<span>${tomBrady.number}</span></li>
          <li class="packprop backpack__yrs">Years:<span>${tomBrady.height}</span></li>
          <li class="packprop backpack__td">Touchdowns:<span>${tomBrady.touchdowns}</span></li>
          <li class="packprop backpack__int">Interceptions:<span>${tomBrady.interceptions}</span></li>
          <li class="packprop backpack__yards">Total Yards:<span>${tomBrady.yards}</span></li>
          <li class="packprop backpack__rush">Rushing Yards:<span>${tomBrady.rushyards}</span></li>
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
