import React from 'react';

import Router from 'app/router';
import { HeaderBar } from 'components/article';
import { useRecoilValue } from 'recoil';
import { userState } from 'shared/store';
import { LoginPage } from 'page';

function App() {
  const userInfo = useRecoilValue(userState);

  return (
    <div className="App">
      {userInfo.isLogin ? (
        <>
          <Router />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
