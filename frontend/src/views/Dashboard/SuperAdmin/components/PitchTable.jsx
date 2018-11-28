import React from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Done from "@material-ui/icons/Done";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Close from "@material-ui/icons/Close";
import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Gavel from "@material-ui/icons/Gavel";
import HelpOutline from "@material-ui/icons/HelpOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Dialog from "components/Dialog";
import Card from "components/Card/Card.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Timeline from "components/Timeline/Timeline.jsx";
import CardText from "components/Card/CardText.jsx";

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";
import { data } from "../data/idea_data.js";
import { progress_data } from "../data/idea_progress.js";

const mapStateToProps = state => {
  return {
    pitches: state.pitchesByFilters
  };
};

class PublishedPitchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
  }

  handleDetailClick() {
    this.setState({
      showDetail: !this.state.showDetail
    });
  }

  render() {
    const { classes } = this.props;
    const { showDetail } = this.state;
    const roundButtons = [
      { color: "info", icon: Done },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button
          round
          color={prop.color}
          className={classes.actionButton + " " + classes.actionButtonRound}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });

    const detailButton = (
      <Button
        justIcon
        round
        color="primary"
        className={classes.marginRight}
        onClick={this.handleDetailClick}
      >
        <MoreHoriz className={classes.icons} />
      </Button>
    );

    data.forEach(d => {
      if (d.length <= 5) {
        d.push(detailButton);
      }
    });

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Published Pitch Table</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    "#",
                    "Title",
                    "Content Contributor",
                    "Created Time",
                    "Status",
                    "Detail"
                  ]}
                  tableData={data}
                  customCellClasses={[
                    classes.center,
                    classes.right,
                    classes.right
                  ]}
                  customClassesForCells={[0, 4, 5]}
                  customHeadCellClasses={[
                    classes.center,
                    classes.right,
                    classes.right
                  ]}
                  customHeadClassesForCells={[0, 4, 5]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        {showDetail ? (
          <Dialog
            open={this.state.showDetail}
            confirm={this.handleDetailClick}
            cancel={this.handleDetailClick}
          >
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Detail",
                  tabIcon: Info,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Title: Idea title1
                        </h4>
                        <p className={classes.cardCategory}>
                          created by Andrew Mike
                        </p>
                        <p>created at 2018-10-21 9:30</p>
                      </CardHeader>
                      <CardBody>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "Idea progress",
                  tabIcon: HelpOutline,
                  tabContent: <Timeline simple stories={progress_data} />
                }
              ]}
            />
          </Dialog>
        ) : null}
      </div>
    );
  }
}

export default withStyles(extendedTablesStyle)(PublishedPitchTable);
