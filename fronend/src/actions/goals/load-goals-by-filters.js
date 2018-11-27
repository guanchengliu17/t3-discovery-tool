import { GOAL_URL } from "../../utils/urls";

export const request = "LOAD_ALL_Goals_REQUEST";
export const success = "LOAD_ALL_Goals_SUCCESS";
export const failure = "LOAD_ALL_Goals_FAILURE";

export const loadGoalsRequest = payload => ({
  type: request,
  payload
});

export const loadGoalsSuccess = payload => ({
  type: success,
  payload
});

export const loadGoalsFailure = payload => ({
  type: failure,
  payload
});

export const loadGoalsByFilters = body => (dispatch, getState) => {
  dispatch(loadGoalsRequest());

  fetch(GOAL_URL, {
    method: "put",

    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })
    .then(response => response.json())
    .then(data => {
      let payload = {
        data
      };

      dispatch(loadGoalsSuccess(payload));
    })
    .catch(error => {
      dispatch(loadGoalsFailure());
    });
};
