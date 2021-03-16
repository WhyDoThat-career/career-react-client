import React from "react";
import axios from "axios";
import "./App.css";

const test_axiosGet = () => {
  // const axios = require("axios");
  axios
    .get("http://15.164.162.236:8888/test")
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log("false");
      return;
    });
};

const test_axiosPost = () => {
  axios
    .post("/http://15.164.162.236:8888/test", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function App() {
  const get_json = axios.get("http://15.164.162.236:8888/test");

  // const post_json = test_axiosPost();
  console.log(get_json);
  // console.log(post_json);
  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={() => console.log(get_json)}>button</button>
    </div>
  );
}

export default App;
