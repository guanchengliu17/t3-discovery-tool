export const getUserSuccess = data => ({
    data,
    type: 'GET_USER_SUCCESS',
});
export const getUserFailure = data => ({
    data,
    type: 'GET_USER_FAILURE',
});
export const getIdea = idea => ({
  idea,
  type: 'GET_IDEA'
})
