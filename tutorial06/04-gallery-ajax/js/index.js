// Create containers to store API urls
const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';

// Define function to  populate photos to main content section
const loadCards = (photos) => { //photos are being passed in
    document.querySelector('.cards').innerHTML = ''; // clears out existing data in class name 'cards'
    for (photo of photos) { // loops through each photos in list from API
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`; //creating template literal that will be displayed for each card
        document.querySelector('.cards').innerHTML += template; //  appends each new template literal from loop to main content
    }
    initCarousel(); //calls function to run carousel features
};

// Query the data from the server:
fetch(bikesURL)
    .then((response) => { // convert data to JS object
        return response.json();
    })
    .then(loadCards); // call loadCards function to process the data
