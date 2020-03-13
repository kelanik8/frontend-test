import React from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import { Switch, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage/ResultPage";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/result" exact component={ResultPage} />
      </Switch>
    </>
  );
}

export default App;
