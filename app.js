const express = require('express');
const https = require('https');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	const url = 'https://randomfox.ca/floof/';
	const options = {
		method: 'GET',
	};

	const request = https.request(url, options, (response) => {
		console.log(response.statusCode);

		response.on('data', (data) => {
			const parsedData = JSON.parse(data).image;
			res.write('<h1>Hello</h1>');
			res.write('<img src=' + parsedData + ' alt="foxes">');

			res.send();
		});
	});

	request.end();
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server started at port 3000.');
});
