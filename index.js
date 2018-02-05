const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'a09ce5ac8ae4418b30579684f8253ead';
let city = argv.c || 'Delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function (err, response, body) {
    if(err){
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});