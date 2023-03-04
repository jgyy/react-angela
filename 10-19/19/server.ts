const app19 = require('express')();
const bodyParser19 = require('body-parser').urlencoded({ extended: true });
const port = 3000;

app19.use(bodyParser19);

app19.get('/', (_: any, res: any) => res.sendFile(__dirname + '/index.html'));

app19.post('/', (req: any, res: any) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send('The result of the calculation is ' + result);
});

app19.post('/bmicalculator', (req: any, res: any) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);
    res.send('Your BMI is ' + bmi);
});

app19.get('/contact', (_: any, res: any) => {
    res.send('<h1>Contact Us</h1>');
});

app19.get('/about', (_: any, res: any) => {
    res.send('<h1>About Us</h1>');
});

app19.get('/hobbies', (_: any, res: any) => {
    res.send('<h1>Our Hobbies</h1>');
});

app19.listen(port, () => console.log(`Example app listening on port ${port}`));
