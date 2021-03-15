import React from "react";
import axios from "axios";
import "./App.css";

const test_axios = () => {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=d48ea8ac906fdf668bee2e7a42183a5f",
    )
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log("false");
      return error;
    });
};

function App() {
  const get_json = test_axios();
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
