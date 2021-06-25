// DOM
let outputHTML = document.getElementById("output");

function postTask() {
    //daten einlesen
    let message = document.getElementById('message').value;
    let name = document.getElementById('name').value;
    let time = new Date();

    let postData = `message=${message}&name=${name}&time=${time}`;

    let reload = setInterval(loadTasks, 2000)

    //port
    fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postData
        })

        .then((response) => {
            loadTasks();
            return response.json();
        })
        .then((erg) => {
            let response = erg.serverResponse;
            document.getElementById('form-message').innerHTML = `<p>${response}</p>`;

            //leeren
            document.getElementById('message').value = '';
            document.getElementById('name').value = '';
        })
        .catch((error) => {
            console.log('Error:', error);
        })

}

function loadTasks() {
    fetch('http://localhost:3000/todo')
        .then((response) => {
            return response.json();
        })

        .then((output) => {
            console.log("Output")
            console.log(output)
            let string = "";
            for (let i = 0; i < output.length; i++) {
                string += `${output[i].message}<br>${output[i].name}<br>${output[i].time}<br>`
            }
            outputHTML.innerHTML = string;

        })
        .catch((error) => {
            console.log('Error: ', error);
        })
}