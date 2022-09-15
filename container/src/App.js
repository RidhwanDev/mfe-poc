import React from "react";
import HelloReactApp from "./components/HelloReactApp";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateAnalysisButton from "./components/CreateAnalysisButton";

const history = createBrowserHistory();
// const MFE1_Button = React.lazy(() =>
//   import("createAnalysis/CreateAnalysisButton")
// );

const Header = () => (
  <div>
    <Link to="/test">home</Link>
    <br />
    <Link to="/react">use react</Link>
    <HelloReactApp />
    <React.Suspense fallback="loading..">
      <CreateAnalysisButton />
      {/* <MFE1_Button /> */}
    </React.Suspense>
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
