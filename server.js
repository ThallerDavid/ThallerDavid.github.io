// Require Modules
const express = require('express');

// start express()
const app = express();
const port = 3000;


// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));


// Listens for port
app.listen(port, () => {
    console.log('Server startet!')
    console.log(`Server port: ${port}!`);
});

// Send files from server to client
app.get('/todo', (req, res) => {
    console.log('Datenanfrage');
    res.send(myData);
})

// serverside Array
let myData = [];

// Get data from client to server-
app.post('/todo', (req, res) => {
    console.log('HALLO DER REQUEST IST DA!');
    let data = req.body;
    myData.push(data);
    res.send({
        serverResponse: 'Daten erhalten.'
    });
})