const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, '/assets')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '/404.html'))
});

app.listen(port, () => {
	console.log("App has started listening on the port: " + port);
});
