import { Flight } from "../../../queries";

/**
 * getRandomFlights
 *
 * Chooses 5 random flights to display
 * @param flights - flight list
 * @param count - how many flights we want to display
 * @returns a list of random flights
 */
export const getRandomFlights = (flights: Flight[], count: number) => {
  const shuffleFlightList = flights.sort(() => Math.random() - 0.5);
  return shuffleFlightList.slice(0, count);
};

/**
 * getFlightsByCompany
 *
 * @param flights - list of flights
 * @param company - company to filter by
 * @returns an array of flights by the given company
 */
export const getFlightsByCompany = (flights: Flight[], company: string) =>
  flights.filter((flight) => flight.airline.name === company);

export const pageSize = 4;

/**
 * In the case I get too many results, I want to paginate the results
 * @param flightlist
 * @param pageSize
 * @param pageNb
 * @returns
 */
export const paginate = (
  flightlist: Flight[],
  pageSize: number,
  pageNb: number
) => {
  return flightlist.slice((pageNb - 1) * pageSize, pageNb * pageSize);
};
