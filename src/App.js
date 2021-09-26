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
import BookingsDetailsPage from "./pages/BookingsDetailsPage";
import BookingsListPage from "./pages/BookingsListPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/panelpage" component={PanelPage} />
        <Route path="/login" component={Login} />
        <Route path="/signuppage" component={SignUpPage} />
        <Route path="/profilpage" component={ProfilePage} />
        <Route path="/userprofilpage" component={UserProfilPge} />
        <Route path="/emailspage/:slug" component={EmailsPage} />
        <Route path="/emailslistpage" component={Emailslistpage} />
        <Route
          path="/reservationpage/:slug/:price"
          exact
          component={ReservationPage}
        />
        <Route path="/bookingsListpage" component={BookingsListPage} />
        <Route
          path="/bookingsdetailspage/:slug"
          component={BookingsDetailsPage}
        />
        <Route path="/detailspage/:slug" component={DetailsPage} />
      </Switch>
    </>
  );
}
export default App;
