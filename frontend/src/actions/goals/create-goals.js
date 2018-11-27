import { GOAL_URL } from "../../utils/urls";
import { loadGoalsByFilters } from "./load-goals-by-filters";

export const request = "CREATE_GOAL_REQUEST";
export const success = "CREATE_GOAL_SUCCESS";
export const failure = "CREATE_GOAL_FAIL";

export const createGoalsRequest = payload => ({
  type: request,
  payload
});

export const createGoalsSuccess = payload => ({
  type: success,
  payload
});

export const createGoalsFailure = payload => ({
  type: failure,
  payload
});

export const createGoals = body => (dispatch, getState) => {
  dispatch(createGoalsRequest(false));

  fetch(GOAL_URL, {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })
    .then(response => {
      if (response.ok) {
        const filter = JSON.stringify({
          deadline: JSON.parse(body).deadline,
          assignee: "Global"
        });
        dispatch(loadGoalsByFilters(filter));
      }
      dispatch(createGoalsSuccess(response.ok));
    })
    .catch(error => {
      dispatch(createGoalsFailure(false));
    });
};
