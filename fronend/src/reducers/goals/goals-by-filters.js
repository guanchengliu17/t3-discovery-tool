import {
  request,
  success,
  failure
} from "../../actions/goals/load-goals-by-filters";

export const initialState = {
  data: [],
  isLoading: false
};

export const goalsByFilters = (state = initialState, action) => {
  switch (action.type) {
    case request: {
      return {
        ...state,
        isLoading: true
      };
    }
    case success: {
      // TODO: Interesring....     ):
      // const data = action.payload.data;
      state.data = action.payload.data;
      console.log("reducer data");
      // state.isLoading = false;
      return {
        ...state,
        isLoading: false
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
