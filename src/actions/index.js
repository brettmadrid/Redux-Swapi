import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
// THINK OF WHAT STATES OUR APP WILL BE IN
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export function fetchChars() {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .get("https://swapi.co/api/people/")
      .then( response => { 
        dispatch({
          type: SUCCESS,
          payload: response.data.results
        })
      })
      .catch( err => {
        console.log(err)
        dispatch({
          type: FAILURE,
          payload: "loading failure..."
        })
      })
  }
}