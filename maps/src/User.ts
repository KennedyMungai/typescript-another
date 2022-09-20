import faker from 'faker';

export class User {
    constructor() {
        
    }

    name: string;
    location: {
        lat: number;
        lng: number;
    };
}