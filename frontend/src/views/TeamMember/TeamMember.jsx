import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import purple from '@material-ui/core/colors/purple';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import AddIcon from '@material-ui/icons/Add';
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Group from "@material-ui/icons/Group";
import WorkIcon from '@material-ui/icons/Work';
import Description from "@material-ui/icons/Description";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import Toc from "@material-ui/icons/Toc";
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { primaryColor } from "assets/jss/material-dashboard-pro-react.jsx";
import Dialog from "components/Dialog";
import CardIcon from "components/Card/CardIcon.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const styles = {
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
    textDecoration: "none"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  headerIcon: {
    width: "16px",
    height: "16px",
    marginRight: "10px"
  },
  tagIcon: {
    backgroundColor: primaryColor,
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  input: {
    display: 'none',
  }
};

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      role: 'contentCreator'
    };
  }

  handleAddMember = () => {
    this.setState({
      showDialog: !this.state.showDialog
    })
  };

  confirmAddMember = () => {
    this.setState({
      showDialog: !this.state.showDialog,
      role: 'contentCreator'
    })
  };

  cancelAddMember = () => {
    this.setState({
      showDialog: !this.state.showDialog,
      role: 'contentCreator'
    })
  };

  handleChangeRole = () => {
    this.setState({
      role: this.state.role === "contentCreator" ? "admin" : "contentCreator"
    })
  }

  render() {
    const { classes } = this.props;
    const detailButton = (
      <Button
        justIcon
        round
        color="info"
        className={classes.marginRight}
        onClick={this.handleDetailClick}
      >
        <MoreHoriz className={classes.icons} />
      </Button>
    )

    return (
      <div style={{overflowX: 'hidden'}}>
        <GridContainer className={classes.teamMemberContainer}>
          <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary" className={classes.cardHeader}>
              <div>
                <h4 className={classes.cardTitleWhite}>
                <Group className={classes.headerIcon} />
                  Team Member List
                </h4>
              </div>
              <MButton variant="fab" color="secondary" aria-label="Add" className={classes.tagIcon} onClick={this.handleAddMember}>
                <AddIcon />
              </MButton>
            </CardHeader>
            <CardBody>
            <Table
              hover
              tableHead={["#", "Name", "Role", "Enroll Date", "Detail"]}
              tableData={[
                {
                  color: "success",
                  data: [
                    "1",
                    "Dakota Rice",
                    "Content Contributor",
                    "2018-01-01",
                    detailButton
                  ]
                },
                {
                  color: "success",
                  data: [
                    "2",
                    "Minerva Hooper",
                    "Content Contributor",
                    "2018-01-01",
                    detailButton
                  ]
                },
                {
                  color: "info",
                  data: [
                    "3",
                    "Sage Rodriguez",
                    "Content Admin",
                    "2017-10-29",
                    detailButton
                  ]
                },
                {
                  color: "info",
                  data: [
                    "4",
                    "Yiming Zhang",
                    "Content Admin",
                    "2018-10-29",
                    detailButton
                  ]
                },
                {
                  color: "danger",
                  data: [
                    "5",
                    "Doris Greene",
                    "Super Admin",
                    "2018-04-12",
                    detailButton
                  ]
                },
                {
                  color: "danger",
                  data: [
                    "6",
                    "Doris Greene",
                    "Super Admin",
                    "2018-05-12",
                    detailButton
                  ]
                },
                {
                  color: "success",
                  data: [
                    "7",
                    "Mike Chaney",
                    "Content Contributor",
                    "2018-07-04",
                    detailButton
                  ]
                }
              ]}
            />
            </CardBody>
          </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardBody profile>
                <h4 className={classes.cardCategory}>David Hill</h4>
                <h6 className={classes.cardTitle}>Content Contributor</h6>
                <List>
                  <ListItem>
                    <Avatar className={classes.tagIcon}>
                      <Description />
                    </Avatar>
                    <ListItemText primary="Number of idea created" secondary="320" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.tagIcon}>
                      <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Number of idea assigned" secondary="1400" />
                    <Avatar className={classes.tagIcon}>
                      <AssignmentTurnedIn />
                    </Avatar>
                    <ListItemText primary="Number of idea approved" secondary="700" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.tagIcon}>
                      <Toc />
                    </Avatar>
                    <ListItemText primary="Assigned vertical" secondary="Education" />
                    <Avatar className={classes.tagIcon}>
                      <BeachAccessIcon />
                    </Avatar>
                    <ListItemText primary="idea needed" secondary="20" />
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <Dialog
          open={this.state.showDialog}
          confirm={this.handleAddMember}
          cancel={this.handleAddMember}
        >
          <Card>
            <CardHeader color="primary" >
              <h4>New Member</h4>
            </CardHeader>
            {/*<CardBody>*/}
              {/*<form>*/}
                {/*<CustomInput*/}
                  {/*success={this.state.registerNameState === "success"}*/}
                  {/*error={this.state.registerNameState === "error"}*/}
                  {/*labelText="Username *"*/}
                  {/*id="registeremail"*/}
                  {/*formControlProps={{*/}
                    {/*fullWidth: true*/}
                  {/*}}*/}
                  {/*inputProps={{*/}
                    {/*onChange: event =>*/}
                      {/*this.change(event, "registerUsername", "username"),*/}
                    {/*type: "username"*/}
                  {/*}}*/}
                {/*/>*/}
                {/*<CustomInput*/}
                  {/*success={this.state.registerEmailState === "success"}*/}
                  {/*error={this.state.registerEmailState === "error"}*/}
                  {/*labelText="Email Address *"*/}
                  {/*id="registeremail"*/}
                  {/*formControlProps={{*/}
                    {/*fullWidth: true*/}
                  {/*}}*/}
                  {/*inputProps={{*/}
                    {/*onChange: event =>*/}
                      {/*this.change(event, "registerEmail", "email"),*/}
                    {/*type: "email"*/}
                  {/*}}*/}
                {/*/>*/}
                {/*<CustomInput*/}
                  {/*success={this.state.registerPasswordState === "success"}*/}
                  {/*error={this.state.registerPasswordState === "error"}*/}
                  {/*labelText="Password *"*/}
                  {/*id="registerpassword"*/}
                  {/*formControlProps={{*/}
                    {/*fullWidth: true*/}
                  {/*}}*/}
                  {/*inputProps={{*/}
                    {/*onChange: event =>*/}
                      {/*this.change(event, "registerPassword", "password"),*/}
                    {/*type: "password"*/}
                  {/*}}*/}
                {/*/>*/}
                {/*<CustomInput*/}
                  {/*success={*/}
                    {/*this.state.registerConfirmPasswordState === "success"*/}
                  {/*}*/}
                  {/*error={this.state.registerConfirmPasswordState === "error"}*/}
                  {/*labelText="Confirm Password *"*/}
                  {/*id="registerconfirmpassword"*/}
                  {/*formControlProps={{*/}
                    {/*fullWidth: true*/}
                  {/*}}*/}
                  {/*inputProps={{*/}
                    {/*onChange: event =>*/}
                      {/*this.change(*/}
                        {/*event,*/}
                        {/*"registerConfirmPassword",*/}
                        {/*"equalTo",*/}
                        {/*"registerPassword"*/}
                      {/*),*/}
                    {/*type: "password"*/}
                  {/*}}*/}
                {/*/>*/}
                {/*<div className={classes.formCategory}>*/}
                  {/*<small>*</small> Required fields*/}
                {/*</div>*/}
              {/*</form>*/}
            {/*</CardBody>*/}
          </Card>
        </Dialog>
      </div>
    );
  }

}

export default withStyles(styles)(TeamMember);
