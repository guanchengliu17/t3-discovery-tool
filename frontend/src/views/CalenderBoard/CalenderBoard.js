import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Timeline from "@material-ui/icons/Timeline";
import CalendarToday from "@material-ui/icons/CalendarToday";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { successColor } from "assets/jss/material-dashboard-pro-react.jsx";
import TextField from "@material-ui/core/TextField";
import MButton from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import green from "@material-ui/core/colors/green";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import { ListItem } from "@material-ui/core/es/index";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import moment from "moment";
import ReactTable from "react-table";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  headerIcon: {
    width: "16px",
    height: "16px",
    marginRight: "10px"
  },
  pitchBoardContainer: {
    position: "relative",
    marginTop: "100px"
  },
  tagIcon: {
    backgroundColor: successColor,
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  week: {
    paddingBottom: "10px",
    borderBottom: "1px solid #4caf50"
  },
  addBtn: {
    marginTop: "45px"
  },
  assignee: {
    marginTop: "27px"
  }
};

const TODAY_INT = moment(moment().format("YYYY-MM-DD")).valueOf();
class CalenderBoard extends React.Component {
  UNSAFE_componentWillMount() {
    this.loadGoalsFilterredByDDL(TODAY_INT);
  }
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      createForm: {
        verticals: "",
        deadline: TODAY_INT,
        total_number: 0
      },
      filter: {
        deadline: TODAY_INT
      },
      showAll: false
    };
  }

  // load goals actions
  // TODO: could add a button to show all goals
  loadAllGoals = () => {
    console.log("load all goals");
    const filter = JSON.stringify({}); // TODO: Fan - according to the user to filter goal
    // this.props.loadGoalsByFilters(filter);
  };
  loadGoalsFilterredByDDL = deadline => {
    // TODO: Fan - according to the user to filter goal
    const filter = JSON.stringify({
      deadline,
      assignee: "Global"
    });

    console.log("load goals");
    this.props.loadGoalsByFilters(filter);
  };

  /*
                Filter status change
             */

  handleTimeFilter = event => {
    const deadline = moment(event.target.value).valueOf(valueOf);
    this.setState({
      filter: {
        ...this.state.filter,
        deadline
      }
    });
    this.loadGoalsFilterredByDDL(deadline);
  };

  /*
            Create goal form change
           */
  handleVerticalChange = event => {
    this.setState({
      createForm: { ...this.state.createForm, verticals: event.target.value }
    });
  };
  handleTotalNumbersChange = event => {
    this.setState({
      createForm: {
        ...this.state.createForm,
        total_number: parseInt(event.target.value)
      }
    });
  };
  handleDeadlineChange = event => {
    this.setState({
      createForm: {
        ...this.state.createForm,
        deadline: moment(event.target.value).valueOf()
      }
    });
  };
  handleSubmitGoal = () => {
    const body = JSON.stringify(this.state.createForm);
    this.props.createGoals(body);
    this.setState({
      showDialog: !this.state.showDialog
    });
    this.setState({
      filter: {
        ...this.state.filter,
        deadline: this.state.createForm.deadline
      }
    });
  };

  handleCreateGoalDialog = () => {
    this.setState({
      showDialog: !this.state.showDialog
    });
  };

  render() {
    const { classes } = this.props;
    const { goals } = this.props;
    let data = [];
    if (goals.data) {
      data = goals.data.map(goal => {
        return {
          verticals: goal.verticals,
          total_number: goal.total_number,
          completed_number: goal.completed_number,
          deadline: moment(goal.deadline).format("YYYY-MM-DD"),
          created_at: goal.created_at.substring(0, 10)
        };
      });
    }
    return (
      <div>
        <Dialog
          open={this.state.showDialog}
          confirm={this.handleClickLog}
          title="Log list"
          maxWidth="xs"
        >
          <CardBody>
            <form>
              <ListItem>
                <CalendarToday className={classes.headerIcon} />
                <TextField
                  id="Deadline"
                  label="Due Date"
                  type="date"
                  defaultValue={moment(TODAY_INT)
                    .toISOString()
                    .substring(0, 10)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    onChange: this.handleDeadlineChange,
                    type: "date"
                  }}
                />
              </ListItem>

              <ListItem>
                <CustomInput
                  labelText="Vertical ID"
                  id="Verticals"
                  formControlProps={{
                    fullWidth: false
                  }}
                  inputProps={{
                    onChange: this.handleVerticalChange,
                    type: "text"
                  }}
                />
              </ListItem>
              <ListItem>
                <CustomInput
                  labelText="Pitch Needed"
                  id="Needed"
                  formControlProps={{
                    fullWidth: false
                  }}
                  inputProps={{
                    type: "text",
                    onChange: this.handleTotalNumbersChange
                  }}
                />
              </ListItem>

              <Button onClick={this.handleSubmitGoal} color="rose">
                Submit
              </Button>
              <Button onClick={this.handleCreateGoalDialog} color="rose">
                Cancel
              </Button>
            </form>
          </CardBody>
        </Dialog>

        <Card className={classes.pitchBoardContainer}>
          <CardHeader color="success">
            <div className={classes.headerContainer}>
              <div>
                <h4 className={classes.cardTitleWhite}>
                  <Timeline className={classes.headerIcon} />
                  Goal Board
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Display history task Goal and make a new plan
                </p>
              </div>

              <MButton
                variant="fab"
                color="secondary"
                aria-label="Add"
                className={classes.tagIcon}
                onClick={this.handleCreateGoalDialog}
              >
                <AddIcon />
              </MButton>
            </div>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardBody>
                    <h4 className={classes.week}>
                      <CalendarToday className={classes.headerIcon} />
                      <TextField
                        id="date"
                        label="Due Date"
                        type="date"
                        value={moment(this.state.filter.deadline)
                          .toISOString()
                          .substring(0, 10)}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{
                          onChange: this.handleTimeFilter,
                          type: "date"
                        }}
                      />
                    </h4>
                    <ReactTable
                      data={data}
                      filterable
                      columns={[
                        {
                          Header: "Vertical ID",
                          accessor: "verticals"
                        },
                        {
                          Header: "Pitch Needed",
                          accessor: "total_number"
                        },
                        {
                          Header: "Pitch Completed",
                          accessor: "completed_number"
                        },
                        {
                          Header: "Due Date",
                          accessor: "deadline"
                        },
                        {
                          Header: "Issue Date",
                          accessor: "created_at"
                        }
                      ]}
                      // defaultPageSize={10}
                      // showPaginationTop
                      // showPaginationBottom={false}
                      className="-striped -highlight"
                    />
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(style)(CalenderBoard);
