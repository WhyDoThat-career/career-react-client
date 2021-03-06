import React from "react";

import Router from "app/router";
import { HeaderBar } from "components/article";
import { useRecoilValue } from "recoil";
import { userState } from "shared/store";

function App() {
  const userInfo = useRecoilValue(userState);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
