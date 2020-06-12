import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  movies: movieReducer,
});

export default rootReducer;

// I'll say combine reducers I'll pass it an object and remember the keys of this object are going to be
// the keys that show up inside of our state object.
