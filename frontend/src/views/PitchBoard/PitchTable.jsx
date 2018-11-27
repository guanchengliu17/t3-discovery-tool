import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Done from "@material-ui/icons/Done";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Close from "@material-ui/icons/Close";
import Info from "@material-ui/icons/Info";
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

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";
import Edit from "@material-ui/icons/Edit";
import EditDialog from "./EditDialog";

class PublishedPitchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
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
  handleReviewAction = (key, pitch_id) => {
    let body = {};
    if (key == 0) {
      body = {
        status: "approved"
      };
    } else {
      body = {
        status: "rejected"
      };
    }
    this.props.reviewPitches(JSON.stringify(body), pitch_id); // TODO: how to get my id
  };

  render() {
    console.log("hello world");
    const { classes } = this.props;
    const { showDetail, showDialog } = this.state;
    const data = this.props.data;
    const more = this.props.more;

    data.forEach((d, index) => {
      if (d.length <= 8) {
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
          [
            { color: "info", icon: Done, id: "approve" },
            { color: "danger", icon: Close, id: "reject" },
            { color: "success", icon: Edit, id: "edit" }
          ].map((prop, key) => {
            const superAdmin =
              this.props.path === "/super-admin/pitch" && prop.id === "edit";
            const admin =
              this.props.path === "/content-admin/pitch" &&
              (prop.id === "approve" || prop.id === "reject");
            if (superAdmin || admin) {
              return (
                <Button
                  round
                  color={prop.color}
                  className={
                    classes.actionButton + " " + classes.actionButtonRound
                  }
                  key={key}
                  onClick={() => {
                    switch (key) {
                      case 2:
                        return this.handleEditChange(more[index].pitch_id, d);

                      default:
                        return this.handleReviewAction(
                          key,
                          more[index].pitch_id
                        );
                    }
                  }}
                >
                  <prop.icon className={classes.icon} />
                </Button>
              );
            }
          })
        );
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
                <h4 className={classes.cardIconTitle}>Global Pitch Board</h4>
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
                    "Action"
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
                        <b>Buy-side network:</b>{" "}
                        {this.state.details.description}
                      </div>

                      <CardBody />
                    </Card>
                  )
                }
              ]}
            />
          </Dialog>
        ) : null}
        <EditDialog
          handleChangeShowEditDialog={this.handleChangeShowEditDialog}
          showDialog={showDialog}
          maxWidth="xs"
          pitchId={this.state.currentPitchId}
          updatePitchesById={this.props.updatePitchesById}
          path={this.props.path}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default withStyles(extendedTablesStyle)(PublishedPitchTable);
