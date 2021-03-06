import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userState } from "shared/store";
import { useHistory } from "react-router-dom";
import { NavItem } from "components/nav/navItem";
import { getCheckUserRepo, getLogout } from "api/userRepo";
import { LoginModal } from "components/modal/loginModal";
import { Col, Container } from "reactstrap";
import { getSearchTyping } from "api/companyRepo";

export function HeaderBar() {
  // const user = useRecoilValue(userState);
  const history = useHistory();
  const [enableEdit, setEdit] = useState(false);
  const [userState, setUserState] = useState(false);
  const [userInfo, setUserInfo]: any = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [searchVisual, setSearchVisual] = useState(false);

  const [skillSearch, setSkillSearch] = useState([]);
  const [companySearch, setCompanySearch] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ search: string }>();

  useEffect(() => {
    (async () => {
      const result = await getCheckUserRepo();

      setUserState(result.is_active);
      setUserInfo(result.data);
    })();

    // if (userState === false) {
    //   getCheckUserRepo().then(function Resp(response) {
    //     setUserState(response.is_active);
    //     if (response.is_active === true) {
    //       getUserInfo(response.data);
    //       // const userImg = userInfo.thumbnail;
    //     }
    //   });
    // }
  }, []);

  const handleSearchChange = (e: any) => {
    (async () => {
      const { value, name } = e.target;
      const answer = await getSearchTyping(value);

      setSkillSearch(answer.skill_result);
      setCompanySearch(answer.company_result);
    })();
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(handleSearch);
    }
  };

  const handleSearch = (e: any) => {
    const data = e.search;

    history.push(`/search?${data}`, data);
  };

  const handleLogout = async () => {
    const result = await getLogout();
    // console.log('is logout', result);
    history.push("/");
    window.location.reload();
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      <Cover>
        <Col xs="3" className="item">
          <Logo onClick={() => history.push("/")}>
            <h1>WhyDoThat</h1>
          </Logo>
        </Col>

        <Col xs="auto" className="item">
          <CustomNav>
            <ul>
              <div>
                <NavItem name="???" route="/" />
              </div>

              <NavItem name="?????? ??????" route="/small" />

              <NavItem name="?????????" route="/big" />
            </ul>
          </CustomNav>
        </Col>

        <Col xs="3" className="item">
          <ButtonContainer>
            <form onSubmit={handleSubmit(handleSearch)}>
              <div>
                <SearchBar
                  // autoComplete="off"
                  placeholder="?????? ??? Enter"
                  enableEdit={enableEdit}
                  onKeyPress={handleKeypress}
                  {...register("search", { required: true })}
                  // onChange={handleSearchChange}
                  // onFocusCapture={() => setSearchVisual(false)}
                  // onFocus={() => setSearchVisual(true)}
                  // onBlur={(e) => setSearchVisual(false)}
                />
                <SearchList enabledEdit={searchVisual}>
                  <ul>
                    {skillSearch?.map((skill) => (
                      <li onClick={() => console.log("ss")}>{skill}</li>
                    ))}
                  </ul>
                  <hr />
                  <ul>
                    {companySearch?.map((company) => (
                      <li>{company}</li>
                    ))}
                  </ul>
                </SearchList>
                <Search
                  size="24"
                  style={{ margin: "0 1rem ", cursor: "pointer" }}
                  onClick={() => setEdit(!enableEdit)}
                />
              </div>
            </form>
          </ButtonContainer>

          {userState ? (
            <UserLogo>
              <img src={userInfo.thumbnail} alt="userimage" />
              <div>{userInfo.nickname}</div>
              <button onClick={handleLogout}>????????????</button>
            </UserLogo>
          ) : (
            <UserLogo>
              <button onClick={() => setModalShow(true)}>?????????</button>
            </UserLogo>
          )}
        </Col>
      </Cover>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

const Cover = styled.header`
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  /* border-bottom: 0.5px solid #e4e4e4; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 1000;

  ul {
    display: flex;
    list-style: none;
    padding: 0.6rem 0;
    margin: 0 0;

    li {
      list-style: none;
      font-size: 1.1rem;
    }
  }

  .item {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: #2ecc71 -1.5779px 1.86493px 0px, #f39c12 1.5779px 1.86493px 0px;
  cursor: pointer;

  p {
    font-weight: bolder;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
  @media only screen and (max-width: 500px) {
    div {
      width: 0px;
      overflow-x: hidden;
    }
  }
`;

const CustomNav = styled.nav`
  width: 100%;
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

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 2rem;
  }

  li {
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    div {
      width: 0px;
      overflow-x: hidden;
    }
  }
`;

const SearchBar = styled.input<{ enableEdit: boolean }>`
  width: ${({ enableEdit }) => (enableEdit ? "10vw" : 0)};
  min-width: ${({ enableEdit }) => (enableEdit ? "150px" : 0)};
  height: 28px;
  opacity: ${({ enableEdit }) => (enableEdit ? 1 : 0)};
  transition: 0.3s all ease;
  margin-left: -5vw;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const SearchList = styled.div<{ enabledEdit: boolean }>`
  display: ${({ enabledEdit }) => (enabledEdit ? "" : "none")};
  z-index: 1000;
  width: 10vw;
  min-width: 150px;
  height: auto;
  margin: 0 0 0 -5vw;
  position: absolute;
  border: 1px solid #e5e6e9;
  border-radius: 6px;
  background-color: white;
  ul {
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: auto;
    li {
      margin: 5px 0;
    }
  }
`;

const UserLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
  }
  button {
    /* width: 100%; */
    /* color: #fff; */
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
    outline: 0;
  }
  button:hover {
    cursor: pointer;
  }
`;

/*
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavItem } from "components/nav/navItem";
import { useHistory } from "react-router-dom";
// import { onLogin } from "api/onLogin";
import { LoginModal } from "components/modal/loginModal";
import Modal from "@material-ui/core/Modal";
import { getCheckUserRepo, getLogout } from "api/userRepo";

export function HeaderBar() {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [userState, setUserState] = useState(false);
  const [userInfo, getUserInfo]: any = useState(0);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  if (userState === false) {
    getCheckUserRepo().then(function Resp(response) {
      setUserState(response.is_active);
      if (response.is_active === true) {
        getUserInfo(response.data);
        // const userImg = userInfo.thumbnail;
      }
    });
  }
  console.log("--------------------------");
  console.log(userState);
  console.log(userInfo);
  console.log("--------------------------");
  return (
    <Cover>
      <nav>
        <div className="inner">
          <div className="nav-container">
            <div className="nav-brand" onClick={() => history.push("/")}>
              WhyDoThat
            </div>

            <CustomNav>
              <ul>
                <NavItem name="?????????" route="/?????????" />
                <NavItem name="?????? ??????" route="/?????? ??????" />
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
                  {userState ? (
                    <UserLogo>
                      <div>
                        <img src={userInfo.thumbnail} alt="userimage" />
                        <div>{userInfo.nickname}</div>
                        <button onClick={getLogout}>????????????</button>
                      </div>
                    </UserLogo>
                  ) : (
                    <UserLogo>
                      <div>
                        <button onClick={openModal}>?????????</button>
                        <Modal
                          open={modalOpen}
                          onClose={closeModal}
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                        >
                          <LoginModal />
                        </Modal>
                      </div>
                    </UserLogo>
                  )}
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
  img {
    height: 2vh;
    width: auto;
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

const UserLogo = styled.div`
  div {
    width: 100%;
    height: 100%;
    display: flex;

    align-items: center;
  }
  button {
    width: 100%
    background-color: #fff;
    border: none;
    outline: 0;
  }
  button:hover {
    cursor: pointer;
  }
`;
*/
