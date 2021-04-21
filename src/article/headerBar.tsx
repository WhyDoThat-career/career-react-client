import React from "react";
import styled from "styled-components";

export function HeaderBar() {
  return (
    <Cover>
      <header>
        <div className="inner">
          <div className="head-container">
            <ul>
              <li className="head-list">
                <div className="head-brand">WhyDoThat</div>
              </li>
              <li className="head-list">
                <div className="head-bigCompany">대기업</div>
              </li>
              <li className="head-list">
                <div className="head-employ">채용 공고</div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Cover>
  );
}

const Cover = styled.div`
  header {
    width: 100%;
    height: 60px;
    border-bottom: 0.5px solid #e4e4e4;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .head-container {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 1rem 0;
    margin: 0 0;
  }
  .head-list {
    width: 240px;
    margin: 0 10px;
  }
  .head-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .head-bigCompany {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .head-employ {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
