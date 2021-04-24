import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';

import { BigCompanyPage, MainPage } from 'page';
import { userState } from 'shared/store';
import LoginPage from 'page/loginPage';
import { HeaderBar } from 'components/article';
import { Footer } from 'components/footer/footer';

function Router() {
  const [cookies, setCookie] = useCookies(['session']);
  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    console.log('session ', cookies);
  }, [cookies]);

  return (
    <MainCover>
      <HeaderBar isLogin={userInfo.isLogin} />

      <Content>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/big" component={BigCompanyPage} />
        </Switch>
      </Content>
      <Footer />
    </MainCover>
  );
}

const MainCover = styled.div`
  min-height: 100%;
`;

const Content = styled.main`
  min-height: 80vh;
`;

export default Router;
