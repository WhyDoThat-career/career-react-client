import React from "react";
import styled from "styled-components";
import "App.css";
import { Footer } from "../components/article/footer";
import { HeaderBar } from "../components/article/headerBar";

function App() {
  return (
    <Cover>
      <div className="App">
        <div>
          <HeaderBar />
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
