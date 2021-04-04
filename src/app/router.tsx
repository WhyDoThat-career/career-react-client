import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { BigCompanyPage, MainPage } from 'page';

function Router() {
  return (
    <MainCover>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/big" component={BigCompanyPage} />
      </Switch>
    </MainCover>
  );
}

const MainCover = styled.main`
  height: 100%;
`;

export default Router;
