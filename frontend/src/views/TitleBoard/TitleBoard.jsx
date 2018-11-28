import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Book from "@material-ui/icons/Book";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

function TitleBoard(props) {
  const { classes } = props;
  return (
    <GridContainer className={classes.titleBoardContainer}>
      <GridItem xs={12} sm={12}md={6}>
        <Card>
          <CardHeader color="primary" className={classes.cardHeader}>
            <div>
              <h4 className={classes.cardTitleWhite}>
              <Book className={classes.headerIcon} />
                Unassigned Title Table
              </h4>
              <p className={classes.cardCategoryWhite}>
                Title need to be assigned
              </p>
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.tableHeaderLabel} htmlFor="vertical-simple">Vertical</InputLabel>
              <Select
                className={classes.tableHeaderLabel}
                value="Lifestyle"
                inputProps={{
                  name: 'vertical',
                  id: 'vertical-simple',
                }}
              >
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                <MenuItem value="Employment">Employment</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
              </Select>
            </FormControl>
          </CardHeader>
          <CardBody>
            testest
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12}md={6}>
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
              <InputLabel className={classes.tableHeaderLabel} htmlFor="vertical-simple">Vertical</InputLabel>
              <Select
                className={classes.tableHeaderLabel}
                value="Lifestyle"
                inputProps={{
                  name: 'vertical',
                  id: 'vertical-simple',
                }}
              >
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                <MenuItem value="Employment">Employment</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
              </Select>
            </FormControl>
          </CardHeader>
          <CardBody>
            testestest
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TitleBoard);
