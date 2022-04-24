export interface Flight {
  id: number;
  boarding_gate: number;
  price: number;
  status: boolean;
  route_code:number;
  airplane_plate: string;
  origin: string;
  destination: string;
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: string;
  promotion_code: number;
  flight_id: number;
  final_price:number;
  duration:string;
}
