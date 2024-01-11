import {
  useGetActiveFlights,
  ActiveFlightsReturnType,
} from "../../queries/useGetActiveFlights";
import { Card } from "../../components/Card/Card";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CATEGORIES, Categories } from "../../utilities/constants";
import { useState } from "react";
import { useStore } from "../../store/store";

const handleEmptyData = ["Data couldn't be retrived"];

const formattedCategories = (categories: Categories) =>
  Object.values(categories);

/**
 * handleFlightNbData
 *
 * @param flights - data to get info from
 * @returns list of flight numbers
 */
const handleFlightNbData = (flights: ActiveFlightsReturnType) => {
  return flights.liveFlights.map((flight) => flight.flight.iata);
};

/**
 * handleCompanyData
 *
 * @param flights - data to get info from
 * @returns a list of unique airline names
 */
const handleCompanyData = (flights: ActiveFlightsReturnType) => {
  const airlines = flights.liveFlights.map((flight) => flight.airline.name);
  return [...new Set(airlines)];
};

/**
 * handleData
 *
 * @param category - type of data to retrive
 * @param data - original data from where the result will be retrived
 * @returns the list of options to show according to the category
 */
const handleData = (
  category: string,
  data: ActiveFlightsReturnType
): string[] => {
  switch (category) {
    case "flightNb":
      return handleFlightNbData(data);

    case "company":
      return handleCompanyData(data);

    default:
      return handleEmptyData;
  }
};

export const SearchBarCard = () => {
  const { data, isLoading } = useGetActiveFlights();

  const [category, setCategory] = useState<string>(CATEGORIES.FLIGHT_NB.key);
  const [keyword, setKeyWord] = useState("");

  const { setCurrentFlight, setCurrentCompany } = useStore((state) => state);

  /**
   * Sets selected flight to the store
   * @param selectedFlight
   */
  const handleSelectedResult = (option: string | null) => {
    if (!data) return null;

    if (category === CATEGORIES.FLIGHT_NB.key) {
      const currentFlightObject = data.liveFlights.find(
        (flight) => flight.flight.iata === option
      );
      if (currentFlightObject) {
        setCurrentFlight(currentFlightObject);
      }
    } else if (category === CATEGORIES.COMPANY.key) {
      setCurrentCompany(option);
      setCurrentFlight(null);
    } else {
      return null;
    }
  };

  return (
    <div className="searchbarcard-container">
      <Card title="What are you looking for?" isLoading={isLoading}>
        <SearchBar
          setCategory={setCategory}
          category={category}
          setKeyWord={setKeyWord}
          keyword={keyword}
          onSelectionAutocomplete={handleSelectedResult}
          autocompleteData={data ? handleData(category, data) : handleEmptyData}
          optionsSelect={formattedCategories(CATEGORIES)}
        />
      </Card>
    </div>
  );
};
