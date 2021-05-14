import React, { useState } from "react";
import styled from "styled-components";
import useComponentVisible from "shared/hook/useComponentVisible";
import { ArrowDown } from "@styled-icons/evaicons-solid";

interface DropdownProps {
  data: { label: string; value: any }[];
  clickMethod: (value: any) => void;
}

function Dropdown({ data, clickMethod }: DropdownProps) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  const [label, setLabel] = useState(data[0].label);

  const showDropdown = () => setIsComponentVisible(true);
  const hideDropdown = () => setIsComponentVisible(false);

  return (
    <Container>
      <DropdownBtn
        ref={ref}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        {label}
        <ArrowDown size={24} />
      </DropdownBtn>
      <Cover isOpen={isComponentVisible}>
        <ul>
          {data?.map((item) => (
            <li
              key={item.label}
              onClick={(event) => {
                clickMethod(item.value);
                setLabel(item.label);
                hideDropdown();
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Cover>
    </Container>
  );
}

const DropdownBtn = styled.button`
  display: flex;
  width: 100px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.span`
  width: fit-content;
  height: auto;
  cursor: pointer;
  position: relative;
`;

const Cover = styled.div<{ isOpen: boolean }>`
  display: grid;
  width: 100px;
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  position: absolute;
  background-color: white;
  right: 0;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.3s ease;
  box-shadow: 0 2px 3px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.084);

  li {
    display: flex;
    width: 100%;
    align-items: center;
    min-height: 30px;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export default Dropdown;
