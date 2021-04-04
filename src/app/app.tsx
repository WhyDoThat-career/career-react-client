import React from 'react';

import Footer from 'components/footer/footer';
import Router from 'app/router';
import { HeaderBar } from 'components/article';
import { useRecoilValue } from 'recoil';
import { userState } from 'shared/store';

function App() {
  const user = useRecoilValue(userState);

  return (
    <div className="App">
      <HeaderBar isLogin={user.isLogin} />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
