import React from "react";
import SuperAdminDashboard from "./SuperAdmin";
import ContentContributorDashboard from "./ContentContributor";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.renderBoard = this.renderBoard.bind(this);
  }

  renderBoard(route) {
    switch (route) {
      case "/super-admin/dashboard":
        return <SuperAdminDashboard dashboard_info={this.props} />;

      case "/content-contributor/dashboard":
        return <ContentContributorDashboard dashboard_info={this.props} />;
      default:
        return <SuperAdminDashboard dashboard_info={this.props} />;
    }
  }
  render() {
    const route = this.props.location.pathname;

    return <div>{this.renderBoard(route)}</div>;
  }
}

export default Dashboard;
