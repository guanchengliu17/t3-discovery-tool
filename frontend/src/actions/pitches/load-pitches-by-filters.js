import {GOAL_URL, PITCHES_URL} from "../../utils/urls";

export const request = "LOAD_ALL_PITCHES_REQUEST";
export const success = "LOAD_ALL_PITCHES_SUCCESS";
export const failure = "LOAD_ALL_PITCHES_FAILURE";

export const loadPitchesRequest = payload => ({
  type: request,
  payload
});

export const loadPitchesSuccess = payload => ({
  type: success,
  payload
});

export const loadPitchesFailure = payload => ({
  type: failure,
  payload
});

export const loadPitchesByFilters = body => (dispatch, getState) => {
  dispatch(loadPitchesRequest());
  fetch(PITCHES_URL, {
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

      dispatch(loadPitchesSuccess(payload));
    })
    .catch(error => {
      dispatch(loadPitchesFailure());
    });
};
