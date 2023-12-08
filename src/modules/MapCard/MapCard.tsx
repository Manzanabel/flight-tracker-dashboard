import { Card } from "../../components/Card/Card";
import { BaseMap } from "../../components/Map/Map";

export const MapCard = () => {
  return (
    <div className="searchbarcard-container">
      <Card title="Live traffic" size="map">
        <BaseMap />
      </Card>
    </div>
  );
};
