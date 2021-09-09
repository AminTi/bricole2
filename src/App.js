import React from "react";
import { Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={""} />
      </Switch>
    </>
  );
}

export default App;
