export class StopOver {
    city: string;
    country: string;
    duration: string;
    flightNumber: string;
    flightID: number;

    constructor(city: string, country: string, duration: string, flightNumber: string, flightID: number) {
        this.city = city;
        this.country = country;
        this.duration = duration;
        this.flightNumber = flightNumber;
        this.flightID = flightID;
    }
}