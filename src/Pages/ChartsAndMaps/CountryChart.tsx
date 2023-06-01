import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CountryChart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    },[])


  return (
    <div className="mt-5">
      <MapContainer
        style={{ height: "100vh", width: "100%" }}
        center={[0, 0]}
        zoom={2}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data &&
          data?.map((country: any) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>Total Active Cases: {country.active}</p>
                  <p>Total Recovered Cases: {country.recovered}</p>
                  <p>Total Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default CountryChart;
