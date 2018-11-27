import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Edit from "@material-ui/icons/Edit";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import { colouredLineChart, multipleBarsChart } from "variables/charts.jsx";

import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";
import moment from "moment";

class WorkLoad extends React.Component {
  UNSAFE_componentWillMount() {
    // TODO: Fan- the filter should be changed to current account after user part has been finished!
    const filter = JSON.stringify({
      assignee: "fan zhang"
    });
    this.props.loadGoalsByFilters(filter);
  }
  render() {
    const raw_data = this.props.goals.data;
    const data = raw_data.map(goal => {
      return [
        goal.verticals,
        goal.total_number,
        goal.completed_number,
        moment(goal.deadline).format("YYYY-MM-DD"),
        goal.created_at.substring(0, 10),

        <CustomLinearProgress
          variant="determinate"
          color="success"
          value={(goal.completed_number * 100.0) / goal.total_number}
          style={{ width: "65%", display: "inline-block" }}
        />
      ];
    });
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Edit />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Current Workload and progress
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={12}>
                    <Table
                      tableHead={[
                        "Vertical",
                        "Pitch Needed",
                        "Pitch Completed",
                        "Due Date",
                        "Issue Date",
                        "Progress"
                      ]}
                      tableData={data}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(chartsStyle)(WorkLoad);
