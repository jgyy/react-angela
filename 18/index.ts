const superHeroes = ["Batman", "Spiderman", "Superman", "Flash", "Hulk", "Thor", "Ironman", "Wolverine"];
const superVillains = ["Lex Luthor", "Green Goblin", "Darkseid", "Reverse Flash", "Abomination", "Loki", "Mandarin", "Magneto"];


const random = (list: string[]) => list[Math.floor(Math.random() * list.length)];
const superHero = random(superHeroes);
const superVillain = random(superVillains);
console.log(superHero);
console.log(superVillain);
