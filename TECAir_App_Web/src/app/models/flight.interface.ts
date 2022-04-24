export interface FlightI {
    id: number,
    boarding_gate: number,
    price: number,
    status: boolean,
    route_code: number,
    airplane_plate: string,
    origin: string,
    destination: string,
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: string,
    travelers: number,
    model: string,
    final_price: number
}