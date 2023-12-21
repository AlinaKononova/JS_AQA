//Hometask 5 - Objects

let carToyota = new Object();
carToyota.color = "Black";
carToyota.year = 2000;
console.log(carToyota);

let carBmw = new Object({property: ["Green", 2015], "weight and speed": ["3000 kg", "150 km/h"]});
console.log(carBmw);


let developer = new Object();
developer.name = "John";
developer.address = {
    street: "123 Walker",
    region: "west"
};
developer.skills = ["JavaScript", "CSS", "HTML"];
developer.sayHello = function(){
    console.log(`Hello, my name is ${this.name} and my skills is ${this.skills}.`)
};
developer.sayHello();
console.log(developer);

let fruitLemon = {
    color: "yellow",
    taste: "sour",
};

fruitLemon["Is it used for limoncello?"] = true;
console.log(fruitLemon);

const king = {
    name: 'Charles',
    age: 45,
    getOlder(){
        this.age++
    }
};
king.getOlder();
console.log(king);

function carProperty(color, year){
    return {
    color: color,
    year: year
    }
}
let carHonda = carProperty("Red", 2010);
console.log(carHonda);

function Trip(hour, weight){
    this.hour = hour;
    this.weight = weight;
};

let tripByBus = new Trip(9, 40);
console.log(tripByBus);

let person = {
    country: "Ukraine",
    city: "Kyiv"
};

let engineer = {
    type: "testing",
    typeOfTesting: "manual"
};

engineer.__proto__ = person;

let qaEngineer = Object.create(engineer);
qaEngineer.testDocumentation = "Test Strategy";

function printKeyValueInPair(obj){
    for(let key in obj){
            console.log(`${key} : ${obj[key]}`)
        };
};

printKeyValueInPair(qaEngineer);