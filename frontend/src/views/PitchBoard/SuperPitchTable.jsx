import React from "react";

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
import Edit from "@material-ui/icons/Edit";
import EditDialog from "./EditDialog";

class SuperPitchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      showDialog: false,
      currentPitchId: "",
      data: {
        currentStatus: "",
        currentVertical: "",
        currentCreator: ""
      },
      currentDetails: {
        url: "",
        description: "",
        network: ""
      }
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
  }

  handleDetailClick = moreInfo => {
    this.setState({
      showDetail: !this.state.showDetail,
      details: moreInfo.details
    });
  };
  handleEditChange = (pitchId, d) => {
    this.handleChangeShowEditDialog();


    this.setState({
      currentPitchId: pitchId,
      data: {
        currentStatus: d[6],
        currentVertical: d[2],
        currentCreator: d[3]
      }
    });
  };
  handleChangeShowEditDialog = () => {
    this.setState({
      showDialog: !this.state.showDialog
    });
  };
  render() {
    const { classes } = this.props;
    const { showDetail, showDialog } = this.state;

    const data = this.props.data;
    const more = this.props.more;

    data.forEach((d, index) => {
      console.log("what is each data");
      console.log(d);
      if (d.length < 8) {
        d.push(
          <Button
            justIcon
            round
            color="primary"
            className={classes.marginRight}
            onClick={() => this.handleDetailClick(more[index])}
          >
            <MoreHoriz className={classes.icons} />
          </Button>
        );
        d.push(
          [{ color: "success", icon: Edit }].map((prop, key) => {
            return (
              <Button
                round
                color={prop.color}
                className={
                  classes.actionButton + " " + classes.actionButtonRound
                }
                key={key}
                onClick={() => this.handleEditChange(more[index].pitch_id, d)}
              >
                <prop.icon className={classes.icon} />
              </Button>
            );
          })
        );
      }
    });
    const current_path = this.props.path;
    const board_name =
      current_path === "/super-admin/calendar"
        ? "Parking Table"
        : "Publish Calender Table";
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>{board_name}</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    "Pitch ID",
                    "Title",
                    "Vertical",
                    "Creator ID",
                    "Created Time",
                    "Updated Time",
                    "Status",
                    "Detail",
                    "Actions"
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
        <EditDialog
          handleChangeShowEditDialog={this.handleChangeShowEditDialog}
          showDialog={showDialog}
          maxWidth="xs"
          pitchId={this.state.currentPitchId}
          updatePitchesById={this.props.updatePitchesById}
          path={this.props.path}
          data={this.state.data}
        />
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
                          Title: Pitch details
                        </h4>
                      </CardHeader>
                      <div>
                        <b>Description:</b> {this.state.details.description}
                      </div>
                      <div>
                        <b>Url:</b> {this.state.details.description}
                      </div>
                      <div>
                        <b>Buy-side network:</b> {this.state.details.description}
                      </div>

                      <CardBody />
                    </Card>
                  )
                }
              ]}
            />
          </Dialog>
        ) : null}
      </div>
    );
  }
}

export default withStyles(extendedTablesStyle)(SuperPitchTable);
