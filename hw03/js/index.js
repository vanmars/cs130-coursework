
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    const imgURL = activeCard.style.backgroundImage;
    console.log('the background image of the active element is:', imgURL);
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview').classList.add('active');
};

// PART 2: Apply showPhoto event to all cards
const cards = document.querySelectorAll('.card');

for (card of cards) {
    card.onclick = showPhoto;
}

// PART 3: Close functionality
const close = () => {
    document.querySelector('.preview').classList.remove('active');
};
document.querySelector('.close').onclick = close;

// PART 4: Next functionality:
const next = () => {
    activeCard = activeCard.nextElementSibling;
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview').classList.add('active');
    console.log(activeCard.nextElementSibling);
};
document.querySelector('.next').onclick = next;
document.querySelector('.featured_image').onclick = next;


// PART 5: Previous functionality:
const previous = () => {
    activeCard = activeCard.previousElementSibling;
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview').classList.add('active');
    console.log(activeCard.previousElementSibling);
};
document.querySelector('.prev').onclick = previous;
