const express = require('express');
const https = require('https');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/image', (_req, res) => {
	const url = 'https://randomfox.ca/floof/';
	const options = {
		method: 'GET',
	};

	const request = https.request(url, options, (response) => {
		console.log(response.statusCode);

		response.on('data', (data) => {
			const parsedData = JSON.parse(data).image;
			res.write('<h1>Fox Picture</h1>');
			res.write('<img src=' + parsedData + ' alt="foxes">');
			res.write(
				'<form action="/image" method="post">\
			<button type="submit">New Picture</button>\
		</form>',
			);
			res.send();
		});
	});

	request.end();
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server started at port 3000.');
});
