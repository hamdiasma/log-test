
const http = require('http');
const moment = require('moment');
const fs = require("fs");

function writeInFile(input) {
    fs.writeFile('log.txt', input, (err, data) => {
        if (err) { return console.error(err); }
        console.log(date);
    });
}

function appendToFile(input) {
    fs.readFile('log.txt', (err, data) => {
        if (err) { return console.error(err); }
        fs.writeFile('log.txt', data , + input, (err, data) => {
            if (err) { return console.error(err); }
            console.log(date);
        });
    });
}

const server = http.createServer((req, res) => {
    const date = moment().format('MM-DD-YYYY, HH:mm')

    if (req.url == '/') {
        //set resp
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<html><body><p>${date}</p></body></html>`);
        res.end()
        writeInFile(date)
    }
    else if (req.url == '/delete') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<html><body><p> </p> le fichier est vide</body></html>`);
        res.end()
        writeInFile('')
    }
    else if (req.url == '/add') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(`<html><body><p> ajouter le date ${date} dans le fichier log</p></body></html>`);
        res.end()
        appendToFile(date)
    }
    else { res.end('page 404.. !'); }
})
server.listen(5000);
console.log('node.js web sever at port 5000 is running... in http://localhost:5000/')