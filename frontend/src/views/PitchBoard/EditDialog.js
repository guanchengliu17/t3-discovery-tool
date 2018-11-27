import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import CardBody from "components/Card/CardBody.jsx";
import CalendarToday from "@material-ui/icons/CalendarToday";
import { successColor } from "assets/jss/material-dashboard-pro-react.jsx";
import TextField from "@material-ui/core/TextField";
import green from "@material-ui/core/colors/green";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import { InputLabel, ListItem, Select } from "@material-ui/core/es/index";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import moment from "moment";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import { updatePitchesById } from "../../actions/pitches/update-pitches-by-id";

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

class EditDialog extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("what is the show dialog");
    console.log(this.props.showDialog);
    console.log(this.props.currentVertical);
  }

  constructor(props) {
    super(props);
    this.state = {
      showDialog: true,
      status: "",
      vertical: "",
      currentPitchId: "",
      creator_id: ""
    };
  }

  /*
                Create goal form change
               */
  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.handleChangeShowEditDialog();
    const body = JSON.stringify({
      status: this.state.status || this.props.data.currentStatus,
      vertical: this.state.vertical || this.props.data.currentVertical,
      creator_id: this.state.creator_id || this.props.data.currentCreator
    });

    this.props.updatePitchesById(body, this.props.pitchId, this.props.path);
    console.log("submnit");
    console.log(this.state);
    console.log(this.props.pitchId);
  };

  handleCancel = () => {
    // this.setState({
    //   showDialog: !this.state.showDialog
    // });
    this.props.handleChangeShowEditDialog();
  };
  handleSelect = name => event => {
    this.setState({ [name]: event.target.value });
    console.log("show me state");
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;
    const showDialog = this.props.showDialog;
    return (
      <div>
        <Dialog open={showDialog} title="Log list" maxWidth="xs">
          <CardBody>
            <form>
              <ListItem>
                <CustomInput
                  labelText="Vertical ID"
                  id="Verticals"
                  formControlProps={{
                    fullWidth: false
                  }}
                  inputProps={{
                    onChange: this.handleInputChange("vertical"),
                    type: "text"
                  }}
                />
              </ListItem>
              <ListItem>
                <CustomInput
                  labelText="Creator Email"
                  id="creator_id"
                  formControlProps={{
                    fullWidth: false
                  }}
                  inputProps={{
                    onChange: this.handleInputChange("creator_id"),
                    type: "text"
                  }}
                />
              </ListItem>
              <ListItem>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Status
                  </InputLabel>
                  <Select
                    value={this.state.status}
                    onChange={this.handleInputChange("status")}
                    inputProps={{
                      name: "status",
                      id: "status"
                    }}
                  >
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="parked"
                    >
                      Parked
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="approved"
                    >
                      Approved
                    </MenuItem>
                  </Select>
                </FormControl>
              </ListItem>

              <Button onClick={this.handleSubmit} color="rose">
                Submit
              </Button>
              <Button onClick={this.handleCancel} color="rose">
                Cancel
              </Button>
            </form>
          </CardBody>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(style)(EditDialog);
