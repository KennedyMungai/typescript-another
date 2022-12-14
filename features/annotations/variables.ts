let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue', 'green'];

//Classes
class Car {
    brand: string = "Mercedes"
}

let car: Car = new Car();

// Object Literal
let point: {x: number; y:number} = {
    x: 10,
    y: 20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When the variable is declared on one line 
//    and initialized on another
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) When the variable type can't be inferred