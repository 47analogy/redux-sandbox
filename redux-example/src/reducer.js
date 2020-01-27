import { UPDATE_NAME } from "./action";

// set an initial state
// initialState is actually the whole state
const initialState = { name: "" };

// always takes state and action.
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};

// import { UPDATE_NAME, UPDATE_AGE } from "./action";

// If our initial state were:

// const initialState = { name: "" , age: 0, color: ""};

// How do we update just the name without losing the age and color?
// Inside of our switch:

// case UPDATE_NAME:
//     return { ...state, name: action.payload };
// case UPDATE_AGE:
//     return Object.assign( {}, state, { age: action.payload })
// (new empty object, current state, whatever dtata putting into the new object )

// We must always remember to return a new object or array.

// Note that Payload could be an object:

// payload: { name: "Dude", age: 0 }
// We could then just return the entire object to create a new object
// return {...state, ...action.payload }
