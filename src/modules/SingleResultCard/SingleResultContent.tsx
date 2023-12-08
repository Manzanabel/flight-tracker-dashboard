import { Flight } from "../../queries";

interface SingleResultContentProps {
  currentFlight: Flight;
  imageSrc: string;
}

export const SingleResultContent = ({
  currentFlight,
  imageSrc,
}: SingleResultContentProps) => {
  return (
    <div className="singleresultcard-container">
      <div className="singleresultcard-cities">
        <div>
          <div className="singleresultcard-prep">From</div>
          <p>{currentFlight.departure.iata}</p>
          <div className="singleresultcard-description">
            {currentFlight.departure.airport}
          </div>
        </div>
        <div>
          <div className="singleresultcard-prep">From</div>
          <p>{currentFlight.arrival.iata}</p>
          <div className="singleresultcard-description">
            {currentFlight.arrival.airport}
          </div>
        </div>
      </div>
      <div className="singleresultcard-aircraft">
        Aircraft type: {currentFlight.aircraft.iata}
        <img src={imageSrc} alt="airplane picture" />
      </div>
    </div>
  );
};
