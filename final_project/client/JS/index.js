// When user clicks 'Login', hide buttons and reveal username and password form.
const revealLogin = (e) => {
  document.querySelector('#btndiv').style.display = "none";
  document.querySelector('#formdiv').style.display = "flex";
}

document.querySelector('#login').onclick = revealLogin;

// Get User
const getUsers = (e) => {
    fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#results').innerHTML = JSON.stringify(data, null, 2);
        });
    e.preventDefault();
};

//Create New User
const createNewUser = (e) => {
    let userName = prompt('Enter a Username', 'Some name');
    let password = prompt('Enter a Password', 'password');
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userName,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#results').innerHTML = JSON.stringify(data, null, 2);
    });
    e.preventDefault();
};

// User Event Listeners
document.querySelector('#getusers').onclick = getUsers;
document.querySelector('#signup').onclick = createNewUser;
