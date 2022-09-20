class Vehicle {
    drive(): void {
        console.log("Something something fast in mu car");
    }

    honk(): void {
        console.log("Honk honk");
    }
}

class Tractor extends Vehicle {
    /**
     *
     */
    constructor() {
        super();
        
    }

    drive(): void {
        console.log('Vroom!');
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const tractor = new Tractor();
tractor.drive();
tractor.honk();