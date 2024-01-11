import { Chart } from "../../components/Chart/Chart";
import { Card } from "../../components/Card/Card";
import { useGetActiveFlights } from "../../queries/useGetActiveFlights";

export const ChartCard = () => {
  const { data, isLoading } = useGetActiveFlights();

  return (
    <div className="searchbarcard-container">
      <Card title="Airlines operating rate" isLoading={isLoading}>
        {data ? (
          <Chart data={data} />
        ) : (
          <p>There was a problem retriving data</p>
        )}
      </Card>
    </div>
  );
};
