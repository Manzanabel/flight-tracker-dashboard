import { Pie, PieChart, Tooltip } from "recharts";
import { ActiveFlightsReturnType } from "../../queries";
import {
  ChartDataModelReturnType,
  chartDataModel,
} from "./utilities/BarChartDataModel";
import { useMemo } from "react";
import { useStore } from "../../store/store";

export interface ChartProps {
  data: ActiveFlightsReturnType;
}

/**
 * maxAirline
 * @returns the airline with the greatest flights operating
 */
const maxAirline = (airlines: ChartDataModelReturnType[]) => {
  const getHighestValueObj = airlines.reduce(
    (max, obj) => (obj.value > max.value ? obj : max),
    airlines[0]
  );
  return getHighestValueObj.name;
};

export const Chart = ({ data }: ChartProps) => {
  const formattedData = useMemo(() => chartDataModel(data), [data]);

  const { setCurrentCompany } = useStore((state) => state);

  return (
    <div className="chart-container">
      <div className="chart-data">
        <div className="chart-pie">
          <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={formattedData}
              outerRadius={50}
              onClick={(_, index) => {
                setCurrentCompany(formattedData[index].name);
              }}
              fill="#f0ac00"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="chart-legend">
          {`At the moment, the airline with most flights operating is ${maxAirline(
            formattedData
          )}`}
        </div>
      </div>
      <div className="chart-instruction">
        Hover over the pie chart to get the rate of each airline operating at
        the moment
      </div>
    </div>
  );
};
