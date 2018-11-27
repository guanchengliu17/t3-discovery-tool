import {
  request,
  success,
  failure
} from "../../actions/pitches/load-pitches-by-filters";

export const initialState = {
  data: [],
  isLoading: false
};

export const pitchesByFilters = (state = initialState, action) => {
  switch (action.type) {
    case request: {
      return {
        ...state,
        isLoading: true
      };
    }
    case success: {
      state.data = action.payload.data;
      console.log("reducer pitches data");
      // console.log(data);
      // state.isLoading = false;
      return {
        ...state,
        isLoading: false,
      };
    }

    case failure:
      return {
        ...state,
        isLoading: false
      };
  }
  return state;
};
