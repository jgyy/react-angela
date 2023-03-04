const app = require('express')();
const bodyParser = require('body-parser').urlencoded({ extended: true });
const port = 3000;

app.use(bodyParser);

app.get('/', (req: any, res: any) => res.sendFile(__dirname + '/index.html'));

app.post('/', (req: any, res: any) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send('The result of the calculation is ' + result);
});

app.post('/bmicalculator', (req: any, res: any) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);
    res.send('Your BMI is ' + bmi);
});

app.get('/contact', (req: any, res: any) => {
    res.send('<h1>Contact Us</h1>');
});

app.get('/about', (req: any, res: any) => {
    res.send('<h1>About Us</h1>');
});

app.get('/hobbies', (req: any, res: any) => {
    res.send('<h1>Our Hobbies</h1>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
