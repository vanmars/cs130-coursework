///////////
// TASKS //
//////////

// 1. THE GAME DETECTS A WIN SCENARIO
  // Create Lists to track when flipped yellow cards and flipped purple cards occur.
  // Use the cardClicked function below to append each list.
let flippedYellow = [];
let flippedPurple = [];

//When the yellow count list length equals four, cue yellow win scenario page.
const yellowWin = () => {
  if (flippedYellow.length == 4) {
    window.location = 'yellowWin.html';
  };
};

//When the purple count list length equals four, cue purple win scenario page.
const purpleWin = () => {
  if (flippedPurple.length == 4) {
    window.location = 'purpleWin.html';
  };
};


// 2. THE GAME DETECTS WHOSE TURN IT IS AND PRINTS IT TO THE SCREEN.
  // Define a variable called 'turn'.
let turn = 'Y';

 // Define variable to track mouse click.
let clickTracker = [];

  // Create function that defines how to change text, turn, clickTracker list on each turn scenario.
const turnChange = (ev) => {
  if (turn == 'Y' && clickTracker.length < 2){   // If turn is yellow, and it is the first turn.
      // If first click is a yellow, it remains yellow's turn.
      if (ev.target.className == 'yellow' || ev.path[1].className == 'yellow') {
        turn = 'Y';
        // If first click is not a yellow: change turn to P, change screen text, and reset clickTracker.
      } else {
        turn = 'P';
        document.querySelector('#turn-text').innerHTML = "PURPLE's Turn";
        clickTracker = [];
      };

  } else if (turn == 'Y' && clickTracker.length == 2) { // If turn is yellow, and it is the second turn.
    // Change turn to P, change screen text,  and reset ClickTracker.
    turn = 'P';
    document.querySelector('#turn-text').innerHTML = "PURPLE's Turn";
    clickTracker = [];

  } else if (turn == 'P' && clickTracker.length < 2) {  // If turn is purple, and it is the first turn.
      // If first click is a purple, it remains purple's turn.
      if (ev.target.className == 'purple' || ev.path[1].className == 'purple') {
      turn = 'P';
      // If first click is not a purple: change turn to Y, change screen text, and reset clickTracker.
      } else {
      turn = 'Y';
      document.querySelector('#turn-text').innerHTML = "YELLOW's Turn";
      clickTracker = [];
      }

  } else { // If turn is purple, and it is the second turn.
    turn = 'Y';
    document.querySelector('#turn-text').innerHTML = "YELLOW's Turn";
    clickTracker = [];
  };
};

// 3. WHEN A USER CLICKS ON A CARD, THE CARD TURNS THE CORRECT COLOR.
    // Create Event Handlers
const cardClicked = (ev) => {
  if (ev.target.className == 'yellow') {            // If clicked div card has a yellow class tag, it will turn yellow.
    ev.target.style.backgroundColor = '#FFEF9F';
    flippedYellow.push(ev);                         // Append event to flippedYellow list.
    yellowWin();                                    // Initialize yellowWin function to see if there is a yellow win scneario.
    clickTracker.push(ev);                          // Append event to clickTracker list to keep track of turn tacken.
    turnChange(ev);                                 // Check to see if the turn needs to change to purple.
  } else if (ev.path[1].className == 'yellow'){     // In case users click on the text element rather than the div card, the div card will still change color, not just the text.
    ev.path[1].style.backgroundColor = '#FFEF9F';
    flippedYellow.push(ev);
    yellowWin();
    clickTracker.push(ev);
    turnChange(ev);

  } else if (ev.target.className == 'purple') {     // Same deal as abve, but for div cards with a purple class tag.
    ev.target.style.backgroundColor = '#B2ABF2';
    flippedPurple.push(ev);
    purpleWin();
    clickTracker.push(ev);
    turnChange(ev);
  } else if (ev.path[1].className == 'purple'){
    ev.path[1].style.backgroundColor = '#B2ABF2';
    flippedPurple.push(ev);
    purpleWin();
    clickTracker.push(ev);
    turnChange(ev);

  } else if (ev.target.className == 'red') {        // Same deal as above, but for div cards with a red class tag.
    ev.target.style.backgroundColor = '#F7717D';
    clickTracker.push(ev);
    turnChange(ev);
  } else if (ev.path[1].className == 'red'){
    ev.path[1].style.backgroundColor = '#F7717D';
    clickTracker.push(ev);
    turnChange(ev);

  } else if (ev.target.className == 'ccyellow') {     // Same deal as above, but for div cards with a ccyellow class tag.
    ev.target.style.backgroundColor = '#FAF6E2';
    clickTracker.push(ev);
    turnChange(ev);
  } else if (ev.path[1].className == 'ccyellow'){
    ev.path[1].style.backgroundColor = '#FAF6E2';
    clickTracker.push(ev);
    turnChange(ev);

  } else if (ev.path[1].className == 'ccpurple'){    // Same deal as above, but for div cards with a ccpurple class tag.
    ev.path[1].style.backgroundColor = '#E9E7F7';
    clickTracker.push(ev);
    turnChange(ev);
  } else {
    ev.target.style.backgroundColor = '#E9E7F7';
    clickTracker.push(ev);
    turnChange(ev);
  }
};

    // Create Event Listeners
document.querySelector('#card1').onclick = cardClicked;
document.querySelector('#card2').onclick = cardClicked;
document.querySelector('#card3').onclick = cardClicked;
document.querySelector('#card4').onclick = cardClicked;
document.querySelector('#card5').onclick = cardClicked;
document.querySelector('#card6').onclick = cardClicked;
document.querySelector('#card7').onclick = cardClicked;
document.querySelector('#card8').onclick = cardClicked;
document.querySelector('#card9').onclick = cardClicked;
document.querySelector('#card10').onclick = cardClicked;
document.querySelector('#card11').onclick = cardClicked;
document.querySelector('#card12').onclick = cardClicked;
document.querySelector('#card13').onclick = cardClicked;
document.querySelector('#card14').onclick = cardClicked;
document.querySelector('#card15').onclick = cardClicked;
document.querySelector('#card16').onclick = cardClicked;
