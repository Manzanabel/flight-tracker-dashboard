import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ActiveFlightsReturnType } from "./types";

const BASE_URL = "http://localhost:3000/flight";

const getActiveFlights = async () => {
  try {
    const activeFlights = await fetch(`${BASE_URL}`);
    const parseActiveFlights = await activeFlights.json();

    return parseActiveFlights;
  } catch (error) {
    console.log("ERROR WHILE FETCHING:", error);
  }
};

export const useGetActiveFlights =
  (): UseQueryResult<ActiveFlightsReturnType> => {
    return useQuery({
      queryKey: ["active_flights"],
      queryFn: getActiveFlights,
      refetchInterval: 30000,
    });
  };
