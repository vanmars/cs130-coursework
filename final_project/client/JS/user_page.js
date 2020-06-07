// Get Outline
const getOutlines = (e) => {
    fetch('http://localhost:5000/outlines')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#outlineResults').innerHTML = JSON.stringify(data, null, 2);
        });
    e.preventDefault();
};

// Create New Outline
const createNewOutline = (e) => {
    let user_id = prompt('Enter your user id', 'User Id');
    let title = prompt('Enter a title for your outline', 'Title');
    let evidence_1_1 = prompt('Claim 1: Enter your first piece of evidence', 'evidence');
    let evidence_1_2 = prompt('Claim 1: Enter your second piece of evidence', 'evidence');
    let close_call_1 = prompt('Claim 1: Enter your close call evidence', 'close call evidence');
    let red_herring_1 = prompt('Claim 1: Enter your red herring evidence', 'red herring evidence');
    let evidence_2_1 = prompt('Claim 2: Enter your first piece of evidence', 'evidence');
    let evidence_2_2 = prompt('Claim 2: Enter your second piece of evidence', 'evidence');
    let close_call_2 = prompt('Claim 2: Enter your close call evidence', 'close call evidence');
    let red_herring_2 = prompt('Claim 2: Enter your red herring evidence', 'red herring evidence');
    fetch('http://localhost:5000/outlines', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            title: title,
            evidence_1_1: evidence_1_1,
            evidence_1_2: evidence_1_2,
            close_call_1: close_call_1,
            red_herring_1: red_herring_1,
            evidence_2_1: evidence_2_1,
            evidence_2_2: evidence_2_2,
            close_call_2: close_call_2,
            red_herring_2: red_herring_2
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#outlineResults').innerHTML = JSON.stringify(data, null, 2);
    });
    e.preventDefault();
};

// Outline Event Listeners
document.querySelector('#get-outlines').onclick = getOutlines;
document.querySelector('#create-outline').onclick = createNewOutline;


// Get Boards
const getBoards = (e) => {
    fetch('http://localhost:5000/boards')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#boardResults').innerHTML = JSON.stringify(data, null, 2);
        });
    e.preventDefault();
};

//Create New Board
const createNewBoard = (e) => {
    let outline_id_1 = prompt('Enter the first outline id you would like to play', 'Outline ID');
    let outline_id_2 = prompt('Enter the second outline id you would like to play', 'Outline ID');
    fetch('http://localhost:5000/boards', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outline_id_1: outline_id_1,
            outline_id_2: outline_id_2
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#boardResults').innerHTML = JSON.stringify(data, null, 2);
    });
    e.preventDefault();
};

// Board Event Listeners
document.querySelector('#get-boards').onclick = getBoards;
document.querySelector('#create-board').onclick = createNewBoard;
