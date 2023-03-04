const app = require('express')();
const expressStatic = require('express').static;
const bodyParserUrlEncoded = require('body-parser').urlencoded;
const httpsGet = require('https').get;
const pathJoin = require('path').join;
const dotenvConfig = require('dotenv').config;

dotenvConfig({ path: pathJoin(__dirname, '.env') });

app.use(expressStatic(pathJoin(__dirname, 'public')));
app.use(bodyParserUrlEncoded({ extended: true }));

app.get('/', (_: any, res: any) => {
    res.sendFile(pathJoin(__dirname, 'signup.html'));
});

app.post('/', (req: any, res: any) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(firstName, lastName, email);
    res.send('Success!');
});

app.post('/failure', (_: any, res: any) => {
    res.redirect('/');
});

app.get('/weather', (_: any, res: any) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.API_KEY}`;
    console.log(url);
    httpsGet(url, (response: any) => {
        console.log(response.statusCode);
        response.on('data', (data: any) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.write(`<h1>The temperature in London is ${temp} degrees Celcius.</h1>`);
            res.write(`<p>The weather is currently ${weatherDescription}</p>`);
            res.write(`<img src="http://openweathermap.org/img/wn/${icon}.png" />`);
            res.send();
        });
    });
});

app.listen(3000, () => {
    console.log('Server is up and listening on port 3000!');
});
