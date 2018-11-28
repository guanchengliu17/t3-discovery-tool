/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import contentAdminRoutes from "routes/contentAdmin.jsx";
import contentContributorRoutes from "routes/contentContributor.jsx";
import superAdminRoutes from "routes/superAdmin.jsx";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo.svg";

const switchContentAdminRoutes = (
  <Switch>
    {contentAdminRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

const switchContentContributorRoutes = (
  <Switch>
    {contentContributorRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

const switchSuperAdminRoutes = (
  <Switch>
    {superAdminRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    this.getRoute = this.getRoute.bind(this);
    this.getSwitch = this.getSwitch.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  getRoute() {
    const pathname = window.location.pathname;
    if (pathname.indexOf('super-admin') > -1) {
      return superAdminRoutes;
    } else if (pathname.indexOf('content-admin') > -1 ) {
      return contentAdminRoutes;
    } else if (pathname.indexOf('content-contributor') > -1) {
      return contentContributorRoutes;
    }
  }

  getSwitch() {
    const pathname = window.location.pathname;
    if (pathname.indexOf('super-admin') > -1) {
      return switchSuperAdminRoutes;
    } else if (pathname.indexOf('content-admin') > -1 ) {
      return switchContentAdminRoutes;
    } else if (pathname.indexOf('content-contributor') > -1) {
      return switchContentContributorRoutes;
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const routes = this.getRoute();
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"Idea Management Tool"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
            <div className={classes.map}>{this.getSwitch()}</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
