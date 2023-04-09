import * as mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
    name: 'Pineapple',
    rating: 9,
    review: 'Great fruit.'
});

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 10,
    review: 'The best fruit!'
});

const John = new Person({
    name: 'John',
    age: 37,
    favouriteFruit: pineapple
});

const Amy = new Person({
    name: 'Amy',
    age: 12,
    favouriteFruit: kiwi
});

const apple = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.'
});

const orange = new Fruit({
    name: 'Orange',
    rating: 4,
    review: 'Too sour for me'
});

const banana = new Fruit({
    name: 'Banana',
    rating: 3,
    review: 'Weird texture'
});

const mango = new Fruit({
    name: 'Mango',
    rating: 6,
    review: 'Decent fruit.'
});

Person.insertMany([John, Amy]).then(() => {
    console.log('Successfully saved all the people to fruitsDB');
}).catch((err) => { console.log(err); });

Fruit.insertMany([kiwi, orange, banana, apple, pineapple, mango]).then(() => {
    console.log('Successfully saved all the fruits to fruitsDB');
}).catch((err) => {
    console.log(err);
});

Fruit.find().then((fruits) => {
    fruits.forEach((fruit) => {
        console.log(fruit.name);
        Fruit.updateOne({ _id: fruit._id }, { name: `${fruit.name}s` });
    });
}).catch((err) => {
    console.log(err);
});

Fruit.deleteMany().then(fruit => {
    console.log(fruit);
});

Person.deleteMany().then(person => {
    console.log(person);
});
