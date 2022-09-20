class Vehicle {
    drive(): void {
        console.log("Something something fast in mu car");
    }

    honk(): void {
        console.log("Honk honk");
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();