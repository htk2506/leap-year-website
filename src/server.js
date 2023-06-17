// Libraries
const http = require("http");
const fs = require('fs').promises;

// Constants
// const host = 'localhost';
const host = '0.0.0.0'; // Listen to all network interfaces
const port = 8000;

// Files to serve
let htmlFile;
let cssFile;
let jsFile;

// Callback for sending data 
const requestListener = function (req, res) {
    // Choose which file to serve based on url, the browser will request each file separately 
    switch (req.url) {
        case "/style.css":
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(cssFile);
            break;
        case "/index.js":
            res.writeHead(200, { "Content-Type": "text/js" });
            res.write(jsFile);
            break;
        default:
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(htmlFile);
    }
    res.end();
};


// Read the HTML file
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        htmlFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });


// Read the CSS file
fs.readFile(__dirname + "/style.css")
    .then(contents => {
        cssFile = contents;
    })
    .catch(err => {
        console.error(`Could not read style.css file: ${err}`);
        process.exit(1);
    });


// Read the JavaScript file
fs.readFile(__dirname + "/index.js")
    .then(contents => {
        jsFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.js file: ${err}`);
        process.exit(1);
    });


// Launch server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server for leap year checking website`)
    console.log(`Server is running on http://${host}:${port}`);
});