function whosPaying(names: string[]): string {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var winner = whosPaying(names);
console.log(winner);
