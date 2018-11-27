/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
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
  }
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{marginTop: '100px'}}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Notifications</h4>
            <p className={classes.cardCategoryWhite}>
              You will receive any updated notification on your ideas and actions
            </p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardBody>
                    <Accordion
                      active={0}
                      collapses={[
                        {
                          title: "The title `CA fire` status has been updated",
                          content:
                            "Content Admin Fan Zhang has approved `CA fire`! Congrats!"
                        },
                        {
                          title: "The title `Fighting!` status has been updated",
                          content:
                            "Content Admin Yiming Zhang has reject `Fighting!`! Congrats!"
                        },
                        {
                          title: "The title `The thanks giving day is coming` status has been updated",
                          content:
                            "Super Admin Xizhao Deng has publish this `The thanks giving day is coming`! Congrats!"
                        },

                      ]}
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

export default withStyles(styles)(Notifications);
