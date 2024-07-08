import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=8Q7_a7VqFHYU2vtvTzm1f14ADvWnBYJYrkMplD-IDMU=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  useEffect(() => {
    const bodyBackground =
      info.humidity >= 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL;
    document.body.style.backgroundImage = `url(${bodyBackground})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = "background-image 0.5s ease-in-out";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [info]);

  function season(){
    if(info.humidity >= 80) return "rainy";
    else if(info.temp > 20) return "hot";
    else return "cold";
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 550, borderRadius: 10,border:2 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={
              info.humidity >= 80
                ? RAIN_URL
                : info.temp > 20
                ? HOT_URL
                : COLD_URL
            }
            title="weather image"
            alt="weather"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ marginBottom: -0.75 }}
            >
              {info.city} &nbsp;
              {info.humidity >= 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon/>
              )}
            </Typography>
            <br />
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div
                style={{ textAlign: "center", color: "black", fontSize: 16 }}
              >
                <b>
                  <p>Temperature = {info.temp} &deg;C</p>
                </b>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  {" "}
                  Wind Speed = {info.wind} m/s &nbsp;
                  <WindPowerIcon
                    sx={{ marginBottom: -0.75, color: "greenyellow" }}
                  />
                </p>
                <p>
                  Humidity = {info.humidity}
                  &nbsp;
                  <WaterDropIcon
                    sx={{ marginBottom: -0.75, color: "#0a12a4" }}
                  />
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  Sunrise = {info.sunrise}
                  &nbsp;
                  <WbTwilightIcon
                    sx={{ marginBottom: -0.75, color: "yellow" }}
                  />
                </p>
                {/* {new Date(info.sunset * 1000).toLocaleTimeString()} */}
                <p>
                  Sunset = {info.sunset}
                  &nbsp;{" "}
                  <WbTwilightIcon
                    sx={{ marginBottom: -0.75, color: "#FB9062" }}
                  />
                </p>
              </div>
              <p>
                The weather can be described as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like {info.feelsLike}
              </p>
              <div>
                <b>
                  <h2 style={{ color: "green" }}>Suggestion for your day:</h2>
                </b>
                <p>
                  <UmbrellaIcon sx={{ marginBottom: -0.75, color: "blue" }} />{" "}
                  <span style={{ color: "blue" }}>Umbrella: </span>
                  {season() == "rainy" ? "Yes" : "No Need"}
                </p>
                <p>
                  <MeetingRoomIcon
                    sx={{ marginBottom: -0.75, color: "blue" }}
                  />{" "}
                  <span style={{ color: "blue" }}>Outdoor: </span>
                  {season() == "rainy"
                    ? "If Urgent"
                    : season() == "hot"
                    ? "If Urgent"
                    : "Enjoy The Sun"}
                </p>
                <p>
                  <CheckroomIcon sx={{ marginBottom: -0.75, color: "blue" }} />{" "}
                  <span style={{ color: "blue" }}>Clothes: </span>
                  {season() == "rainy"
                    ? "Shorts"
                    : season() == "hot"
                    ? "Shorts"
                    : "Warm"}
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
