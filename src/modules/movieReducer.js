export const SET_LOADING = "SET_LOADING";
export const HAS_ERROR = "HAS_ERROR";
export const SET_DATA = "SET_DATA";
export const SET_PROFILE_DATA = "SET_PROFILE_DATA";

const initialState = {
  movieData: [{ movies: [] }, { movie: undefined }, { status: "idle" }],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, status: "loading" };
    case HAS_ERROR:
      return { ...state, status: "error" };
    case SET_DATA:
      return { ...state, movies: action.payload, status: "completed" };
    case SET_PROFILE_DATA:
      return { ...state, movie: action.payload, status: "completed" };
    default:
      return state;
  }
}
