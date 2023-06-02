// Libraries
const http = require("http");
const fs = require('fs').promises;

// Constants
const host = 'localhost';
const port = 8000;

let indexFile;

// Callback for sending data 
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write(indexFile);
    res.end()
};


// Read the HTML file
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });


// Luanch server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});