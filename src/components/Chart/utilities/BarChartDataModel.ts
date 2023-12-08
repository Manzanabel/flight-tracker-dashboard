import { ActiveFlightsReturnType } from "../../../queries";

export interface ChartDataModelReturnType {
  name: string;
  value: number;
}

/**
 * barChartDataModel
 * Formats data according to what is expected by the chart component
 * @param - ActiveFlightsReturnType
 * @returns array of ChartDataModelReturnType
 */
export const chartDataModel = (
  data: ActiveFlightsReturnType
): ChartDataModelReturnType[] => {
  const result = Object.entries(
    data.liveFlights.reduce((accumulator, flight) => {
      const airlineName = flight.airline.name;
      accumulator[airlineName] = (accumulator[airlineName] || 0) + 1;
      return accumulator;
    }, {} as Record<string, number>)
  ).map(([name, value]) => ({ name, value }));

  return result;
};
