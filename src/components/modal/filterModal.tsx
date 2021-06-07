import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getSector } from "api/companyRepo";
import { Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DetailChip, FilterChip } from "components/chip/filterChip";
import { classNames } from "react-select/src/utils";

export interface FilterModalProps {
  show: boolean;
  onHide: () => void;
  clickMethod: (arg: string) => void;
  newbieMethod: (arg: string) => void;
}

export interface FilterSector {
  name: string;
}

export function FilterModal({
  show,
  onHide,
  clickMethod,
  newbieMethod,
}: FilterModalProps) {
  const [selector, setSelector] = useState<string>();
  const [sector, setSector] = useState<FilterSector[]>([] as FilterSector[]);
  const [key, setKey] = useState<string>("smallcompany");
  const [filterState, setFilterState] = useState<string>("");
  const [detailState, setDetailState] = useState<string>("");
  const [newbieState, setNewbieState] = useState<string>("");
  const [newbie, setNewbie] = useState<string>("no");

  useEffect(() => {
    (async () => {
      const result = await getSector();

      setSector(result.data);
    })();
  }, []);

  const handleFooterBtn = () => {
    clickMethod(key);
    newbieMethod(newbie);
    onHide();
  };

  const SelectorFilter = () => {
    switch (selector) {
      case "sector":
        return (
          <ul>
            {sector?.map((data) => (
              <DetailChip
                label={data.name}
                click={data.name === detailState}
                onClick={() => {
                  setKey(data.name);
                  setDetailState(data.name);
                }}
              />
            ))}
          </ul>
        );
      case "platform":
        return (
          <ul>
            <DetailChip
              label="Wanted"
              click={"Wanted" === detailState}
              onClick={() => {
                setKey("wanted");
                setDetailState("Wanted");
              }}
            />

            <DetailChip
              label="RocketPunch"
              click={"RocketPunch" === detailState}
              onClick={() => {
                setKey("roketpunch");
                setDetailState("RocketPunch");
              }}
            />

            <DetailChip
              label="Programmers"
              click={"Programmers" === detailState}
              onClick={() => {
                setKey("programmers");
                setDetailState("Programmers");
              }}
            />
          </ul>
        );
      default:
        return <ul></ul>;
    }
  };

  const ButtonSwitch = () => {
    if (newbie === "no") {
      return <button disabled={true}>확인</button>;
    } else {
      return <button onClick={handleFooterBtn}>확인</button>;
    }
  };

  return (
    <Modal isOpen={show} toggle={onHide} centered>
      <Cover>
        <Header>
          <button onClick={onHide}>
            <i className="fas fa-times"></i>
          </button>
        </Header>
        <ModalBody>
          <FilterContainer>
            <SelectFilter>
              <h3>1. 필터 선택</h3>
              <ul>
                <FilterChip
                  label="sector"
                  name="sector"
                  click={"sector" === filterState}
                  onClick={() => {
                    setSelector("sector");
                    setFilterState("sector");
                  }}
                />
                <FilterChip
                  label="platform"
                  name="platform"
                  click={"platform" === filterState}
                  onClick={() => {
                    setSelector("platform");
                    setFilterState("platform");
                  }}
                />
              </ul>
            </SelectFilter>
            <SectorFilter>
              <h3>2. 상세 선택</h3>
              <SelectorFilter />
            </SectorFilter>
            <NewbieFilter>
              <h3>3. 신입 선택</h3>
              <DetailChip
                label="선택 안함"
                name="nofilter"
                click={"nofilter" === newbieState}
                onClick={() => {
                  setNewbie("");
                  setNewbieState("nofilter");
                }}
              />
              <DetailChip
                label="신입"
                name="newbie"
                click={"newbie" === newbieState}
                onClick={() => {
                  setNewbie("1");
                  setNewbieState("newbie");
                }}
              />
              <DetailChip
                label="경력"
                name="notNewbie"
                click={"notNewbie" === newbieState}
                onClick={() => {
                  setNewbie("0");
                  setNewbieState("notNewbie");
                }}
              />
            </NewbieFilter>
          </FilterContainer>
          <FooterBtn>
            {console.log(key)}
            <ButtonSwitch />
          </FooterBtn>
        </ModalBody>
      </Cover>
    </Modal>
  );
}

const Cover = styled.div`
  height: 600px;
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
    outline: 0;
    margin: 0 0 10px;
    i {
      font-size: 1.5rem;
    }
  }
`;
const FilterContainer = styled.div`
  max-height : 55vh;
  overflow-y: scroll;
`;

const SelectFilter = styled.div`
  .sector {
    background-color: rgb(239, 251, 243);
  }
  .platform {
    background-color: rgb(238, 237, 244);
  }

  .click {
    border: 2px solid #31B404;
  }
`;

const SectorFilter = styled.div`
  width: 100%;
  ul {
    min-height: 100px;
    height: auto;
    border: 1px solid #e1e2e3;
    padding: 10px;
    margin: 10px 0;
    .click {
      border: 2px solid #31B404;
    }
  }
`;

const NewbieFilter = styled.div`
  .click {
    border: 2px solid #31B404;
  }
`;

const FooterBtn = styled.div`
  button {
    margin-top : 3vh;
    color: #fff;
    width: 100%;
    height: 50px;

    background-color: #31B404;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: normal;
    text-align: center;

    &:disabled {
      background-color: #fff;
      color: #31B404;
      border: 1px solid #31B404;
    }
    &:hover {
      border: 1px solid #31B404;
      color: #31B404;
      background-color: white;
    }
  }
`;
