import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SuperPitchTable from "./SuperPitchTable";
import Button from "components/CustomButtons/Button.jsx";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import PitchTable from "./PitchTable";
import Info from "@material-ui/icons/Info";

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
  }
};

class PitchBoard extends React.Component {
  UNSAFE_componentWillMount() {
    const current_path = this.props.location.pathname;

    if (current_path === "/super-admin/calendar") {
      const filter = JSON.stringify({
        status: "approved"
      });
      this.props.loadPitchesByFilters(filter);
    } else if (current_path === "/super-admin/parking") {
      const filter = JSON.stringify({
        status: "parked"
      });
      this.props.loadPitchesByFilters(filter);
    } else {
      const filter = JSON.stringify({
        status: "new"
      });
      this.props.loadPitchesByFilters(filter);
    }

  }

  render() {
    const current_path = this.props.location.pathname;
    const superPitchTable =
      current_path === "/super-admin/parking" ||
      current_path === "/super-admin/calendar"
        ? true
        : false;

    const pitches = this.props.pitches.data;
    const data = pitches.map((pitch, key) => {
      return [
        key + 1,
        pitch.title,
        pitch.vertical,
        pitch.creator_id,
        pitch.created_at.substring(0, 10),
        pitch.updated_at.substring(0, 10),
        pitch.status
      ];
    });
    const more = pitches.map(pitch => {
      return {
        details: pitch.details,
        pitch_id: pitch.id
      };
    });

    const { classes } = this.props;
    return (
      <Card className={classes.pitchBoardContainer}>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>
            <FormatAlignLeft className={classes.headerIcon} />
            Pitch Table
          </h4>
          <p className={classes.cardCategoryWhite}>
            Information on vertical in this week
          </p>
        </CardHeader>
        <CardBody>
          {superPitchTable ? (
            <SuperPitchTable
              data={data}
              more={more}
              path={this.props.location.pathname}
              updatePitchesById={this.props.updatePitchesById}
            />
          ) : (
            <PitchTable
              path={this.props.location.pathname}
              data={data}
              more={more}
              reviewPitches={this.props.reviewPitches}
              updatePitchesById={this.props.updatePitchesById}
            />
          )}
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(PitchBoard);
