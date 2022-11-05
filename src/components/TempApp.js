import React, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=41124214774a65e9247ca6975a11739e`;
      const response = await fetch(url);
      // console.log(response)
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
      
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>page not found!</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h3>
            </div>
            <div className="wave_one"></div>
            <div className="wave_two"></div>
            <div className="wave_three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
