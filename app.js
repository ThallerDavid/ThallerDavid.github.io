const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('Server startet!')
    console.log(`Server port: ${port}!`);
});

app.get('/todo', (req, res) => {
    console.log('Datenanfrage');
    res.send( JSON.stringify(myData) );
})

let myData = [];

app.post('/todo', (req, res) => {
    console.log('HALLO DER REQUEST IST DA!');
    
    let data = req.body;
    myData.push(data);
    
    res.send( { serverResponse: 'Daten erhalten.' } );
})



