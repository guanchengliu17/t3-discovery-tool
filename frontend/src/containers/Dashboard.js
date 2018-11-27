import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadGoalsByFilters } from "../actions/goals/load-goals-by-filters";
import { createGoals } from "../actions/goals/create-goals";
import Dashboard from "../views/Dashboard/Dashboard";

const mapStateToProps = state => {
  return {
    goals: state.goalsByFilters
  };
};
const mapDispatchToProps = dispatch => ({
  loadGoalsByFilters: bindActionCreators(loadGoalsByFilters, dispatch),
  createGoals: bindActionCreators(createGoals, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
