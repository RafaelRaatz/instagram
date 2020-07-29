import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profile from "./pages/profile";
import Feed from "./pages/feed";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
