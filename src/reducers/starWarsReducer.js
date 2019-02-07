import { LOADING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  loading: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // action types should be FETCHING, SUCCESS and FAILURE
      case LOADING:
      return {
        ...state,
        loading: true,
        characters: [],
        error: ""
      }
      case SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: ""
      }
      case FAILURE:
      return {
        ...state,
        loading: false,
        characters: [],
        error: action.payload
      }
      default:
      return state;
  }
};

export default charsReducer;
