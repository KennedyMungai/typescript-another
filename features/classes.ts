class Vehicle {
    /**
     *
     */
    constructor(public color: string) {
        
    }

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
    constructor(public wheels: number, color: string) {
        super("Orange");
        
    }

    drive(): void {
        console.log('Vroom!');
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const tractor = new Tractor(3,"Dank");
tractor.drive();
tractor.honk();