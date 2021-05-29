import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function KakaoPage() {
  const [datas, setDatas] = useState<string>('');
  const location = useLocation<any>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDatas(location.state.tag);
  }, []);

  useEffect(() => {
    if (ref && ref?.current !== undefined) {
      ref?.current &&
        Array.from(
          ref?.current?.querySelectorAll('.emph_desc'),
        ).forEach((data) => data.classList.add('li-header'));
    }
  }, [ref?.current]);

  return (
    <Cover>
      <Content>
        <KakaoHeader>KAKAO 채용</KakaoHeader>
        <div ref={ref} dangerouslySetInnerHTML={{ __html: datas }}></div>
      </Content>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  font-size: 16px !important;
`;

const KakaoHeader = styled.div`
  width: 100%;
  line-height: 18px;
  vertical-align: baseline;
  padding: 11px 15px;
  background-color: #ffd709;
  color: white;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  width: 60vw;
  height: 100%;

  .area_cont {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .li-header {
    font-weight: bold;
    font-size: 20px !important;
  }
`;

export default KakaoPage;
