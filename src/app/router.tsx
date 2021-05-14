import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";

import { BigCompanyPage, MainPage, SmallCompanyPage } from "page";
import { userState } from "shared/store";
import LoginPage from "page/loginPage";
import { HeaderBar } from "components/article";
import { Footer } from "components/article/footer";
import CompanyInfoPage from "page/companyInfoPage";

function Router() {
  const [cookies, setCookie] = useCookies(["session"]);
  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    console.log("session ", cookies);
  }, [cookies]);

  return (
    <MainCover>
      <HeaderBar />

      <Content>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/big" component={BigCompanyPage} />
          <Route exact path="/small" component={SmallCompanyPage} />

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
