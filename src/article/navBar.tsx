import React from "react";
import styled from "styled-components";

export function NavBar() {
  return (
    <Cover>
      <nav>
        <div className="inner">
          <div className="nav-container">
            <div className="nav-brand">WhyDoThat</div>
            <ul>
              <li className="nav-bigCompany">대기업</li>
              <li className="nav-employ">채용 공고</li>
            </ul>
            <ul>
              <li className="nav-search">
                <SearchButton>
                  <button>
                    <i className="fas fa-search search"></i>
                  </button>
                </SearchButton>
              </li>
              <li className="nav-login">로그인</li>
            </ul>
          </div>
        </div>
      </nav>
    </Cover>
  );
}

const Cover = styled.div`
  nav {
    width: 100%;
    height: 50px;
    border-bottom: 0.5px solid #e4e4e4;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0.6rem 0;
    margin: 0 0;
  }
  .nav-bigCompany {
    font-size: 1.1rem;
    padding: 0 1.5rem;
  }
  .nav-employ {
    font-size: 1.1rem;
    padding: 0 1.5rem;
  }
`;

const SearchButton = styled.div`
  button {
    background-color: #fff;
    border: none;
    outline: 0;
  }
  button:hover {
    cursor: pointer;
  }
  .search {
    font-size: 1.2rem;
  }
`;
