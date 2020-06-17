export const MOVIE_SET_LOADING = "MOVIE_SET_LOADING";
export const MOVIE_HAS_ERROR = "MOVIE_HAS_ERROR";
export const MOVIE_SET_DATA = "MOVIE_SET_DATA";
export const MOVIE_SET_PROFILE_DATA = "MOVIE_SET_PROFILE_DATA";
export const MOVIE_SET_LANGUAGE = "MOVIE_SET_LANGUAGE";

const initialState = {
  movies: [],
  movie: undefined,
  status: "idle",
  language: "en-EN",
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_SET_LOADING:
      return { ...state, status: "loading" };
    case MOVIE_HAS_ERROR:
      return { ...state, status: "error" };
    case MOVIE_SET_DATA:
      return { ...state, movies: action.payload, status: "completed" };
    case MOVIE_SET_LANGUAGE:
      return { ...state, language: action.payload, status: "completed" };
    case MOVIE_SET_PROFILE_DATA:
      return { ...state, movie: action.payload, status: "completed" };
    default:
      return state;
  }
}
