interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    Summary(): string 
};

const oldCivic: Vehicle = {
    name: 'civic',
    year: 2000,
    broken: true,
    Summary(): string {
        return `
            ${this.name} was made in ${this.year} and is it broken? ${this.broken}
        `;
    }
};

const notdrink = {
    color: 'brown', 
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink is ${this.color}. Is it carbonated? ${this.carbonated}. It has ${this.sugar} units of sugar`;
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.Summary());
};      

printVehicle(oldCivic);