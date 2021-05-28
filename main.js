// 👇 notes and checklist goes here...👇
// When a user selects a message option and then clicks the “Receive Message” button,
//the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area
// select message option

// THIS IS A FUNCTIONAL VERSION FOR ALL OF ITERATION ONE

// 👇 query selectors here...👇
var selectAffirmation = document.querySelector("#affirmation");
var selectMantra = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector('.button');
var messageDisplay = document.querySelector('.received-message');
var iconDisplay = document.querySelector('.meditate-img');


// 👇 data and global variables go here...👇
var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"Broken promises don't upset me. I just think, why did they believe me?",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"When I drop my keys into a river of molten lava, I'll just let them stay there.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
];

var mantras = [
"Breathing in, I send myself love.",
"Breathing out, I send love to someone else who needs it.",
"Don't let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"Snakes don't have arms, that's why they can't wear vests.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
];


// 👇 event listeners go here 👇
// window.addEventListener('load', FUNCTION);
receiveMessageButton.addEventListener('click', getMessage);


// 👇 functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getMessage() {
  if (selectMantra.checked) {
    messageDisplay.innerText = `${mantras[getRandomIndex(mantras)]}`
  }
  else if (selectAffirmation.checked){
    messageDisplay.innerText = `${affirmations[getRandomIndex(affirmations)]}`
  }
  messageDisplay.classList.remove('hidden');
  iconDisplay.classList.add('hidden');
}
