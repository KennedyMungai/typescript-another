const carMakers: string[] = ['ford', 'GM', 'chevrolet', 'peugout', 'chrysler'];

const carByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// Help with inference when extracting values
const carMaker: string = carMakers[0];

const carMakersStuff = carMakers.map((maker: string): string => {
    return `${maker} boiii`;
});

console.log(carMakersStuff);