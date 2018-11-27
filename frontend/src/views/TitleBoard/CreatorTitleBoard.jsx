import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Book from "@material-ui/icons/Book";

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Dialog from "components/Dialog/Dialog.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Table from "components/Table/CreatorTitleTable.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  tableHeaderLabel: {
    color: "white"
  },
  titleBoardContainer: {
    marginTop: "100px"
  },
  headerIcon: {
    width: "16px",
    height: "16px",
    marginRight: "10px"
  },
};

class creatorTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  handleClickEdit = () => {
    this.setState({
      showDialog: !this.state.showDialog
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer className={classes.titleBoardContainer}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning" className={classes.cardHeader}>
                <div>
                  <h4 className={classes.cardTitleWhite}>
                  <Book className={classes.headerIcon} />
                    Assigned Title Table
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    Title assigned to content writer in this week
                  </p>
                </div>
                <FormControl className={classes.formControl}>
                  <InputLabel className={classes.tableHeaderLabel} htmlFor="status-simple">Status</InputLabel>
                  <Select
                    className={classes.tableHeaderLabel}
                    value="All"
                    inputProps={{
                      name: 'status',
                      id: 'status-simple',
                    }}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Untitled">Untitled</MenuItem>
                    <MenuItem value="Titled">Titled</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                  </Select>
                </FormControl>
              </CardHeader>
              <CardBody>
                <Table
                  clickEdit={this.handleClickEdit}
                  tableHeaderColor="rose"
                  tableHead={["Title", "Content creator",  "Assignee", "Vertical", "Status", "Operation"]}
                  tableData={[
                    ["Only straight-A students can...", "Dakota Rice", "Kerry Deng", "Lifestyle", "Titled"],
                    ["If you can get every one...", "Minerva Hooper", "Kerry Deng", "Lifestyle", "Titled"],
                    ["Only people in the English...", "Sage Rodriguez", "Kerry Deng", "Lifestyle", "Approved"],
                    ["Can you pass the EMT Cerification...", "Philip Chaney", "Kerry Deng", "Lifestyle", "Approved"],
                    ["", "Dakota Rice", "Kerry Deng", "Lifestyle", "Untitled"],
                    ["", "Minerva Hooper", "Kerry Deng", "Lifestyle", "Untitled"],
                  ]}
                >
              </Table>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <Dialog open={this.state.showDialog} confirm={this.handleClickEdit} title="Edit Title" maxWidth="md">
        <GridContainer>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Title"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Description"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridContainer>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(creatorTable);
