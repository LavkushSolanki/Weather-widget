import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "43b7e9cfba346174eede9cb7bae201ba";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city.toUpperCase(),
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        wind: jsonResponse.wind.speed,
        sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(
          "en-US",
          {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }
        ),
        sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(
          "en-US",
          {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }
        ),
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw(err)
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    setError("");
    setCity("");
    let info = await getWeatherInfo();
    updateInfo(info);
    }
    catch(err)
    {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
        sx={{border:2,borderRadius:2,borderColor:"blue"}}
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist!</p>}
      </form>
    </div>
  );
}
