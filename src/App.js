import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import PanelPage from "./pages/PanelPage";
import UserProfilPge from "./pages/UserProfilPage";
import EmailsPage from "./pages/EmailsPage";
import Emailslistpage from "./pages/EmailsListPage";
import ReservationPage from "./pages/ReservationPage";

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
        <Route path="/emailspage/:slug" exact component={EmailsPage} />
        <Route path="/emailslistpage" exact component={Emailslistpage} />
        <Route
          path="/reservationpage/:slug/:price"
          exact
          component={ReservationPage}
        />
      </Switch>
    </>
  );
}

export default App;
