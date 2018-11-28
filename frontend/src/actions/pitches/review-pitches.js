import { GOAL_URL, PITCHES_URL } from "../../utils/urls";
import { loadGoalsByFilters } from "./review-pitches.js";
import { loadPitchesByFilters } from "./load-pitches-by-filters";

export const request = "REVIEW_PITCHES_REQUEST";
export const success = "REVIEW_PITCHES_SUCCESS";
export const failure = "REVIEW_PITCHES_FAILURE";

export const reviewPitchesRequest = payload => ({
  type: request,
  payload
});

export const reviewPitchesSuccess = payload => ({
  type: success,
  payload
});

export const reviewPitchesFailure = payload => ({
  type: failure,
  payload
});

export const reviewPitches = (body, pitch_id) => (dispatch, getState) => {
  dispatch(reviewPitchesRequest(false));
  const url = `${PITCHES_URL}${pitch_id}`;

  fetch(url, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })
    .then(response => {
      if (response.ok) {
        const filter = JSON.stringify({
          status: "new"
        });
        dispatch(loadPitchesByFilters(filter));
      }
      dispatch(reviewPitchesSuccess(response.ok));
    })
    .catch(error => {
      dispatch(reviewPitchesFailure(false));
    });
};
