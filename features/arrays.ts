const carMakers: string[] = ['ford', 'GM', 'chevrolet', 'peugout', 'chrysler'];

const carByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// Help with inference when extracting values
const carMaker: string = carMakers[0];

const carMakersStuff = carMakers.map((maker: string): string => {
    return maker.toUpperCase();
});

// console.log(carMakersStuff);

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '23-10-2020'];
importantDates.push(new Date());
importantDates.push('20-10-2010');
importantDates.push('20-10-2011');

console.log(importantDates);