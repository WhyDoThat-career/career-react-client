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
import SmallCompanyInfoPage from "page/smallCompanyInfoPage";
import NaverPage from "page/largecap/naverPage";
import KakaoPage from "page/largecap/kakaoPage";

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
          <Route
            key="big"
            path="/big"
            render={({ match: { url } }) => {
              return (
                <>
                  <Route exact path={`${url}`} component={BigCompanyPage} />
                  <Route
                    path={`${url}/detail/naver/:id`}
                    component={NaverPage}
                  />
                  <Route
                    path={`${url}/detail/kakao/:id`}
                    component={KakaoPage}
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
                    component={SmallCompanyInfoPage}
                  />
                </>
              );
            }}
          />

          <Route path="*">
            <NotFoundPage />
            <NoMatch />
          </Route>
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
