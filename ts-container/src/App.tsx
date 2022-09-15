import React from "react";
import HelloReactApp from "./components/HelloReactApp";
import { createBrowserHistory } from "history";
import { Link, Route, Router, Switch } from "react-router-dom";

const history = createBrowserHistory();
// const MFE1_Button = lazy(() => import("helloReact/HelloReactApp"));

const Header = () => (
  <div>
    <Link to="/test">home</Link>
    <br />
    <Link to="/react">use react</Link>
    <HelloReactApp />
  </div>
);

export default () => {
  return (
    <Router history={history}>
      {/* <Header /> */}
      <hr />
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    </Router>
  );
};
