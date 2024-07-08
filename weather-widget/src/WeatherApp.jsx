import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp()
{

    const [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelsLike: 24.84,
      temp: 25.05,
      tempMin: 25.05,
      tempMax: 25.05,
      humidity: 47,
      weather: "haze",
      wind:1.4,
      sunrise:"6:00:00 AM",
      sunset:"6:00:00 PM",
    });

    let updateInfo=(info)=>{
        setWeatherInfo(info)
    }

    return (
      <div>
        <h2> Weather App By IndraDev</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    );
}