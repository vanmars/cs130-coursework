// To-Do
// a. Figure out why some clicked cards are not working


// 1. When a user clicks on a card, the card turns the correct color.

// Create Event Handlers
const yellowClicked = (ev) => {
  console.log(ev);
  ev.target.style.backgroundColor = '#FFEF9F';
};

const purpleClicked = (ev) => {
  console.log(ev);
  ev.target.style.backgroundColor = '#B2ABF2';
};

const redClicked = (ev) => {
  console.log(ev);
  ev.target.style.backgroundColor = '#F7717D';
};

const ccyellowClicked = (ev) => {
  console.log(ev);
  ev.target.style.backgroundColor = '#FAF6E2';
};

const ccpurpleClicked = (ev) => {
  console.log(ev);
  ev.target.style.backgroundColor = '#E9E7F7';
};

// Create Event Listeners
document.querySelector(".yellow").onClick = yellowClicked;
document.querySelector(".purple").onClick = purpleClicked;
document.querySelector(".red").onclick = redClicked;
document.querySelector(".ccyellow").onclick = ccyellowClicked;
document.querySelector(".ccpurple").onclick = ccpurpleClicked;

// 2. The game detects whose turn it is and changes the turn text.
