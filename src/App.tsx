import React from "react";
import styled from "styled-components";
import "./App.css";
import { Footer } from "./article/footer";
import { NavBar } from "./article/navBar";
import { convertCompilerOptionsFromJson } from "typescript";

function App() {
  return (
    <Cover>
      <div className="App">
        <div>
          <NavBar />
          <h1>hi</h1>
        </div>
        <Footer />
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  .App {
    // margin: 0 auto;
  }
`;

export default App;
