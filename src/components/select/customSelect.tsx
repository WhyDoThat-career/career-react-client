import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SelectProps {
  datas: { label: string; value: any }[];
  setValue: any;
  field: string;
}

function CustomSelect({ datas, setValue, field }: SelectProps) {
  const [state, setState] = useState();

  useEffect(() => {
    setValue(`${field}`, state);
  }, [state]);

  return (
    <Select>
      <OptionContainer>
        {datas.map((data) => (
          <Option onClick={(event) => setState(data.value)}>
            {data.label}
          </Option>
        ))}
      </OptionContainer>
    </Select>
  );
}

const Select = styled.div`
  display: flex;
`;

const OptionContainer = styled.ul`
  list-style: none;
`;

const Option = styled.li``;

export default CustomSelect;
