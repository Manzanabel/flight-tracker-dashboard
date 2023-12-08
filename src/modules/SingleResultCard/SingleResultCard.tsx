import { Card } from "../../components/Card/Card";
import { useGetPhoto } from "../../queries/useGetPhoto/useGetPhoto";
import { useStore } from "../../store/store";
import { SingleResultContent } from "./SingleResultContent";

const SingleResultCard = () => {
  const { currentFlight } = useStore((state) => state);
  const { data: pictureList } = useGetPhoto(
    currentFlight?.aircraft.iata || "plane"
  );

  const imageSrc = pictureList?.photos ? pictureList?.photos[0].src.small : "";

  return (
    <Card
      title={`Flight ${
        currentFlight ? currentFlight.flight.iata : "information"
      } `}
    >
      {currentFlight ? (
        <SingleResultContent
          currentFlight={currentFlight}
          imageSrc={imageSrc}
        />
      ) : (
        <p>
          Get all the information about the flight you want. Select one from the
          list or search one from the searchbar
        </p>
      )}
    </Card>
  );
};

export default SingleResultCard;
