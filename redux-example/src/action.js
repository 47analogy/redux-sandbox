// name of action
export const UPDATE_NAME = "UPDATE_NAME";

// action creator that returns the actual action (an object)
export const updateName = payload => {
  return { type: UPDATE_NAME, payload: payload };
};
