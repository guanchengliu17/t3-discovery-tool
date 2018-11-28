import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const hist = createBrowserHistory();

const mapStateToProps = state => (
  {
    initValue: state.initValue
  }
);

class App extends React.Component {
    render() {
        return (
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
              })}
            </Switch>
          </Router>
        );
    }
}

export default App;
