import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={""} />
        <Route path="/login" exact component={Login} />
        <Route path="/signuppage" exact component={SignUpPage} />
        <Route path="/profilpage" exact component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
