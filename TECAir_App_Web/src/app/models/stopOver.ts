export class StopOver {
    city: string;
    country: string;
    duration: string;
    flightNumber: string;

    constructor(city: string, country: string, duration: string, flightNumber: string) {
        this.city = city;
        this.country = country;
        this.duration = duration;
        this.flightNumber = flightNumber;
    }
}