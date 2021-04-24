import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getSector } from 'api/companyRepo';

function BigCompanyPage() {
  const [test, setTest] = useState<{ name: string; id: number }[]>();

  useEffect(() => {
    (async () => {
      const result = await getSector();
      console.log('====================================');
      console.log(result.data);
      console.log('====================================');
      setTest(result.data);
    })();
  }, []);

  return (
    <Cover>
      <p>Big</p>

      {test?.map((data) => (
        <p>{data.name}</p>
      ))}
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  flex-direction: column;
`;

export default BigCompanyPage;
