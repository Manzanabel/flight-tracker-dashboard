import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { defaultCoords } from "./constants";
import { Flight, useGetActiveFlights } from "../../queries";
import { useStore } from "../../store/store";
import "./style/index.scss";
import { useEffect, useState } from "react";

const getCoords = (flight: Flight | null): { lng: number; lat: number } => ({
  lng: flight?.live?.longitude || defaultCoords.center.lng,
  lat: flight?.live?.latitude || defaultCoords.center.lat,
});

export const BaseMap = () => {
  const { data: currentFlights } = useGetActiveFlights();

  const { currentFlight } = useStore((state) => state);

  return (
    <div className="basemap-container">
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["marker"]}
      >
        <Map
          id="map-flights"
          zoom={4}
          style={{ width: "18em", height: "18em" }}
          center={getCoords(currentFlight)}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {currentFlights?.liveFlights.map((data, index) => (
            <Marker key={index} position={getCoords(data)} />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
