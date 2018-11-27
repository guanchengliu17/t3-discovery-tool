import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import PitchTable from "./components/PitchTable.jsx";
import WorkLoad from "./components/WorkLoad.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class ContentContributorDashboard extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("what is the props");
    console.log(this.props.dashboard_info);
  }
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <WorkLoad
          loadGoalsByFilters={this.props.dashboard_info.loadGoalsByFilters}
          goals={this.props.dashboard_info.goals}
        />
        <PitchTable />
      </div>
    );
  }
}

ContentContributorDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ContentContributorDashboard);
