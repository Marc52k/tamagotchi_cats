let hunger = 10;
let happiness = 10;
let energy = 10;

const feedKnop = document.getElementById("feedKnop");
const sleepKnop = document.getElementById("sleepKnop");
const playKnop = document.getElementById("playKnop");

feedKnop.addEventListener("click", feed);
sleepKnop.addEventListener("click", sleep);
playKnop.addEventListener("click", play);

/* als je eten geeft komt er +1 bij honger en -1 bij happiness*/

const hungerText = document.querySelector('.hunger');
function feed() {
  if (hunger < 10) {
    hunger = hunger + 1;
  }
  if (happiness > 0) {
    happiness = happiness - 1;
  }
  catImage.src = 'images/Kat-eten-bakje.jpeg';
  setTimeout(updateScreen, 1000);
}
/* Bron: https://articles.hepper.com/how-to-keep-cats-from-eating-each-others-food/ */

const happinessText = document.querySelector('.happiness');
function play() {
  if (happiness < 10) {
    happiness = happiness + 1;  
  }
  if (energy > 0) {
    energy = energy - 1;
  }
  catImage.src = 'images/Kat-spelen.png';
  setTimeout(updateScreen, 1000);
}
/* Bron https://www.kongcompany.com/cats-need-to-play/ */

const energyText = document.querySelector('.energy');
function sleep() {
  if (energy < 10) {
    energy = energy + 1;
  }
  if (hunger > 0) {
    hunger = hunger - 1;
  }
  catImage.src = 'images/kat-sleeping.webp';
  setTimeout(updateScreen, 1000);
}
/* Bron: https:/www.turmerry.com/blogs/dreamerry/cat-sleeping-positions */
const catImage = document.querySelector('.pet-image');
function updateScreen() {
  hungerText.textContent = "Hunger:" + hunger;
  happinessText.textContent = "Happiness:" + happiness;
  energyText.textContent = "Energy:" + energy;

  if (hunger <= 0 || happiness <= 0 || energy <= 0) {
    catImage.src = 'images/kat-dood.webp';
  } else if (hunger < 5 || happiness < 5 || energy < 5) {
    catImage.src = 'images/kat-sad.jpeg';
  } else {
    catImage.src = 'images/cat-happy-start.jpeg';
  }
}

/*Bronnen: 
1. https://imgflip.com/memetemplate/407364371/cat-died
2.https://www.reddit.com/r/Eyebleach/comments/gxt6hu/meet_franco_the_happiest_cat_you_have_ever_seen/?tl=nl
3.https://nl.pinterest.com/bloblahehe/sad-cat-meme/
*/

setInterval(function() {
  if (hunger > 0) {
    hunger = hunger - 1;
  }
  if (happiness > 0) {
    happiness = happiness - 1;
  }
  if (energy > 0) {
    energy = energy - 1;
  }
  updateScreen();
}, 5000); updateScreen();

/* audio met behulp van chat GPT. Promt: hoe voeg je audio of achtergrond muziek in javascript. */

const backgroundMusic = new Audio('audio/tama-st.mp3');
backgroundMusic.volume = 0.5;
backgroundMusic.loop = true;

backgroundMusic.play().catch(function(error) {
  console.log("Autoplay geblokkeerd, start bij eerste klik op het scherm");
});

document.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});
