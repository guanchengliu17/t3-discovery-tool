const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS': {
        const user = {
          name: 'Yiming',
          role: 'SuperAdmin'
        }
        return {
            ...state,
            user
        };
    }
    case 'GET_USER_FAILURE': {
        const user = null;
        return {
            ...state,
            user
        };
    }
    case 'GET_IDEA': {
        const idea = {
          title: 'This is a test idea',
          creator: 'Yiming Zhang',
          description: 'This is a test description for this test idea',
          status: 'New'
        };
        return {
            ...state,
            idea,
        };
    }
    default:
        return state;
  }
};

export default templateReducer;