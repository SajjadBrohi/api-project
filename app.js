const express = require('express');
const https = require('https');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
app.post('/image', (req, res) => {
=======
app.post('/', (req, res) => {
>>>>>>> 107c2d14364426d7c6e764baaa73dc65fdfeb2a2
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
<<<<<<< HEAD
			res.write(
				'<form action="/image" method="post">\
			<button type="submit">New Picture</button>\
		</form>',
			);
=======

>>>>>>> 107c2d14364426d7c6e764baaa73dc65fdfeb2a2
			res.send();
		});
	});

	request.end();
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server started at port 3000.');
});
