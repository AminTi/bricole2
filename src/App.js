import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import PanelPage from "./pages/PanelPage";
import UserProfilPge from "./pages/UserProfilPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/panelpage" exact component={PanelPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signuppage" exact component={SignUpPage} />
        <Route path="/profilpage" exact component={ProfilePage} />
        <Route path="/userprofilpage" exact component={UserProfilPge} />
      </Switch>
    </>
  );
}

export default App;
