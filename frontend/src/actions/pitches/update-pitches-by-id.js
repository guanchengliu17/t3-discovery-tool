import { PITCHES_URL } from "../../utils/urls";
import { loadPitchesByFilters } from "./load-pitches-by-filters";

export const request = "UPDATE_PITCHES_BY_ID_REQUEST";
export const success = "UPDATE_PITCHES_BY_ID_SUCCESS";
export const failure = "UPDATE_PITCHES_BY_ID_FAIL";

export const updatePitchesByIdRequest = payload => ({
  type: request,
  payload
});

export const updatePitchesByIdSuccess = payload => ({
  type: success,
  payload
});

export const updatePitchesByIdFail = payload => ({
  type: failure,
  payload
});

export const updatePitchesById = (body, pitch_id, path) => dispatch => {
  dispatch(updatePitchesByIdRequest(false));
  const url = `${PITCHES_URL}${pitch_id}`;
  fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })
    .then(response => {
      if (response.ok) {
        let filter = {};
        console.log("what is the path")
        console.log(path)
        switch (path) {
          case "/super-admin/parking":
            filter = {
              status: "parked"
            };
            break;
          case "/super-admin/calendar":
            filter = {
              status: "approved"
            };
            break;
          default:
            break;
        }
        dispatch(loadPitchesByFilters(JSON.stringify(filter)));
      }

      dispatch(updatePitchesByIdSuccess(response.ok));
    })
    .catch(error => {
      dispatch(updatePitchesByIdFail(false));
    });
};
