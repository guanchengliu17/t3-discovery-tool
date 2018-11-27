import { connect } from "react-redux";
import PitchBoard from "../views/PitchBoard/PitchBoard";
import { bindActionCreators } from "redux";
import { loadPitchesByFilters } from "../actions/pitches/load-pitches-by-filters";
import { reviewPitches } from "../actions/pitches/review-pitches";
import {updatePitchesById} from "../actions/pitches/update-pitches-by-id";

const mapStateToProps = state => {
  return {
    pitches: state.pitchesByFilters
  };
};
const mapDispatchToProps = dispatch => ({
  loadPitchesByFilters: bindActionCreators(loadPitchesByFilters, dispatch),
  reviewPitches: bindActionCreators(reviewPitches, dispatch),
  updatePitchesById: bindActionCreators(updatePitchesById, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PitchBoard);
