export type ActiveFlightsReturnType = {
  liveFlights: Flight[];
};

export type APIFlightsReturnType = {
  pagination: Pagination;
  data: Flight[];
};

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface Flight {
  id: string;
  flight_date: string;
  flight_status: string;
  departure: Departure;
  arrival: Arrival;
  airline: Airline;
  flight: FlightCodes;
  aircraft: Aircraft;
  live: Live | null;
}

export interface Departure {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  delay: number;
  scheduled: Date;
  estimated: Date;
  actual: Date;
  estimated_runway: Date;
  actual_runway: Date;
}

export interface Arrival {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  baggage: string;
  delay: number;
  scheduled: Date;
  estimated: Date;
  actual: Date | null;
  estimated_runway: any;
  actual_runway: any;
}

export interface Airline {
  name: string;
  iata: string;
  icao: string;
}

export interface FlightCodes {
  number: string;
  iata: string;
  icao: string;
  codeshared: string;
}

export interface Aircraft {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export interface Live {
  updated: Date;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}
