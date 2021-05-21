import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";

import { BigCompanyPage, MainPage, SmallCompanyPage, NotFoundPage } from "page";
import { userState } from "shared/store";
import LoginPage from "page/loginPage";
import { HeaderBar } from "components/article";
import { Footer } from "components/article/footer";
import CompanyInfoPage from "page/companyInfoPage";

function Router() {
  const [cookies, setCookie] = useCookies(["session"]);
  const userInfo = useRecoilValue(userState);
  const [notfound, setNotfound] = useState(true);

  useEffect(() => {
    console.log("session ", cookies);
  }, [cookies]);

  const NoMatch = () => {
    setNotfound(false);
    return null;
  };

  return (
    <MainCover>
      {notfound ? <HeaderBar /> : null}

      <Content>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/big" component={BigCompanyPage} />
          <Route exact path="/small" component={SmallCompanyPage} />
          <Route path="/notfound">
            <NotFoundPage />
            <NoMatch />
          </Route>
          <Route
            key="big"
            path="/big"
            render={({ match: { url } }) => {
              return (
                <>
                  <Route exact path={`${url}`} component={BigCompanyPage} />
                  <Route
                    path={`${url}/detail/:id`}
                    component={CompanyInfoPage}
                  />
                </>
              );
            }}
          />
          <Route
            key="small"
            path="/small"
            render={({ match: { url } }) => {
              return (
                <>
                  <Route exact path={`${url}`} component={SmallCompanyPage} />
                  <Route
                    path={`${url}/detail/:id`}
                    component={CompanyInfoPage}
                  />
                </>
              );
            }}
          />
        </Switch>
      </Content>
      {notfound ? <Footer /> : null}
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
