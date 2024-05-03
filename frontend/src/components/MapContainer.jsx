import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = ({ lat, lng, showmap }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const [selectedPlace, setSelectedPlace] = useState(null);

  //const apiKey = process.env.REACT_APP_MAP_API_KEY;
  const apiKey = "AIzaSyBhCKGc0_cJu_1V_KU3DgWUQqqyxEJXDjA";

  const apiUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=doctor&keyword=gynecologist&key=${apiKey}`;
  fetch(apiUrl).then((response) => response.json());

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNearbyPlaces(data.results))
      .catch((error) =>
        console.error("Error fetching nearby gynecologists:", error)
      );
  }, [lat, lng, apiUrl]);

  const containerStyle = {
    width: "80%",
    height: "90vh",
    margin: "4%",
  };

  const center = {
    lat,
    lng,
  };

  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  const purpleMarkerIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
    scaledSize: { width: 40, height: 40 },
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhCKGc0_cJu_1V_KU3DgWUQqqyxEJXDjA",
  });

  return isLoaded && showmap ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={mapOptions}
    >
      {nearbyPlaces.map((place) => (
        <Marker
          key={place.id}
          position={{
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          }}
          onClick={() => setSelectedPlace(place)}
          icon={purpleMarkerIcon}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.geometry.location.lat,
            lng: selectedPlace.geometry.location.lng,
          }}
        >
          <div>
            <h4 style={{ fontSize: "16px" }}>{selectedPlace.name}</h4>
            <p>{selectedPlace.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : null;
};

export default MapContainer;
