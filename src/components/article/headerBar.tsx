import React, { useState } from "react";
import styled from "styled-components";
import { NavItem } from "components/nav/navItem";
// import { onLogin } from "api/onLogin";
import { LoginModal } from "components/modal/loginModal";
import Modal from "@material-ui/core/Modal";

export function HeaderBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Cover>
      <nav>
        <div className="inner">
          <div className="nav-container">
            <div className="nav-brand">WhyDoThat</div>

            <CustomNav>
              <ul>
                <NavItem name="대기업" route="/대기업" />
                <NavItem name="채용 공고" route="/채용 공고" />
              </ul>
            </CustomNav>

            <SearchLogin>
              <ul>
                <li className="nav-search">
                  <button>
                    <i className="fas fa-search searchIcon"></i>
                  </button>
                </li>
                <li>
                  <button onClick={openModal}>로그인</button>
                  <Modal
                    open={modalOpen}
                    onClose={closeModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <LoginModal />
                  </Modal>
                </li>
              </ul>
            </SearchLogin>
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
  .nav-recruit {
    font-size: 1.1rem;
    padding: 0 1.5rem;
  }
`;

const CustomNav = styled.nav`
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 1000;

  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    min-width: 100px;
    text-align: center;
  }
`;

const SearchLogin = styled.div`
  button {
    background-color: #fff;
    border: none;
    outline: 0;
  }
  button:hover {
    cursor: pointer;
  }
  .nav-search {
    padding: 0 1rem;
  }
  .searchIcon {
    font-size: 1.2rem;
  }
  .nav-login {
    border-left: 1px solid #e4e4e4;
    padding: 0 1rem;
  }
`;
