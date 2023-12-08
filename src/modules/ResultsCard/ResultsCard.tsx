import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Flight, useGetActiveFlights } from "../../queries";
import { useStore } from "../../store/store";
import {
  fallbackMessage,
  loadingMessage,
} from "../../utilities/sharedComponents";

/**
 * getRandomFlights
 *
 * Chooses 5 random flights to display
 * @param flights - flight list
 * @param count - how many flights we want to display
 * @returns a list of random flights
 */
const getRandomFlights = (flights: Flight[], count: number) => {
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
const getFlightsByCompany = (flights: Flight[], company: string) =>
  flights.filter((flight) => flight.airline.name === company);

export const ResultsCard = () => {
  const { data, isLoading, error } = useGetActiveFlights();
  const { setCurrentFlight, currentCompany } = useStore((state) => state);

  const [flightsToShow, setFlightsToShow] = useState<Flight[] | null>(null);

  useEffect(() => {
    //if a company was chosen, we switch to show only flights by that company
    if (data) {
      if (currentCompany) {
        const flightsByCompany = getFlightsByCompany(
          data?.liveFlights,
          currentCompany
        );
        setFlightsToShow(flightsByCompany.slice(0, 3));
      } else {
        setFlightsToShow(getRandomFlights(data.liveFlights, 4));
      }
    }
  }, [data, currentCompany]);

  const content = () => {
    if (isLoading) {
      return loadingMessage;
    }

    if (error) {
      return fallbackMessage;
    }

    if (flightsToShow) {
      return flightsToShow.map((flight: Flight, index: number) => (
        <div>
          <li
            key={index}
            onClick={() => setCurrentFlight(flight)}
            style={{ cursor: "pointer", fontFamily: "serif" }}
          >
            {`${flight.airline.name.toUpperCase()}: ${
              flight.departure.airport
            } to ${flight.arrival.airport}`}
          </li>
          <br />
        </div>
      ));
    }
  };

  const title = currentCompany
    ? `Current flights by ${currentCompany}`
    : "Some of the current flights";

  return <Card title={title}>{content()}</Card>;
};
