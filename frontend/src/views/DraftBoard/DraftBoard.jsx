import React from "react";
import { createPitch } from "actions/pitches/create-pitches.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import { resolve } from "path";

class DraftBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      title: "",
      author: "Yiming Zhang",
      url: "",
      buy_side: "",
      vertical: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitPitch = this.handleSubmitPitch.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this)
  }

  handleSelect (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  showAlert() {
    console.log(this)
    this.successAlert.bind(this)
    this.successAlert()
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-170px", width: "500px" }}
          title="Create a pitch successfully"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }

  handleSubmitPitch() {
    const body = {
      "title": this.state.title,
      "status": "new",
      "idea_type": "draft",
      "creator_id": "Yiming Zhang",
      "details": {
       "url": this.state.url,
       "description": this.state.description,
       "network": this.state.buy_side
      }
    }

    createPitch(JSON.stringify(body))
    .then(ret => {
      if (ret.ok) {
        console.log(ret)
        this.showAlert()
      }
    })
  }


  render() {
    const { classes } = this.props;
    return (
      <div style={{overflowX: 'hidden'}}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="rose" text>
                  <CardText color="rose">
                    <h4 className={classes.cardTitle}>Pitch Draft</h4>
                  </CardText>
                </CardHeader>
                <CardBody>
                  <form>
                    <GridContainer>
                      <GridItem xs={5} sm={1}>
                        <FormLabel className={classes.labelHorizontal}>
                          Title
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} lg={5}>
                        <CustomInput
                          id="title"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            name: "title",
                            onChange: (event) => this.handleInputChange(event)
                          }}
                        />
                      </GridItem>
                      <GridItem xs={5} sm={1}>
                        <FormLabel className={classes.labelHorizontal}>
                          Vertical
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} lg={5} style={{marginTop: '25px'}}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.vertical}
                            onChange={this.handleSelect}
                            inputProps={{
                              name: "vertical",
                              id: "vertical"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Choose Vertical
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Education"
                            >
                              Education
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Entertainment"
                            >
                              Entertainment
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Sport"
                            >
                              Sport
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Travel"
                            >
                              Travel
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Life"
                            >
                              Life
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem xs={5} sm={1}>
                        <FormLabel className={classes.labelHorizontal}>
                          URL
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} lg={5}>
                        <CustomInput
                          id="url"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            name: "url",
                            onChange: (event) => this.handleInputChange(event)
                          }}
                        />
                      </GridItem>
                      <GridItem xs={5} sm={1}>
                        <FormLabel className={classes.labelHorizontal}>
                          Buy-side Network
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} lg={5}>
                        <CustomInput
                          id="buyside_newtork"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            url: "buy_side",
                            onChange: (event) => this.handleInputChange(event)
                          }}
                        />
                      </GridItem>
                      <GridItem xs={10} sm={10} md={10} lg={10} style={{marginLeft: '40px'}}>
                        <CustomInput
                          labelText="This is a textarea field for description"
                          id="description"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                            name: "description",
                            onChange: (event) => this.handleInputChange(event)
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                        <Button color="rose" round className={classes.marginRight} onClick={this.handleSubmitPitch}>
                          pitch it!
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          {this.state.alert}
      </div>

    );
  }
}

export default withStyles(regularFormsStyle)(DraftBoard);
