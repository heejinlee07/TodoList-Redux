//액션타입

export const SET_LOADING = "SET_LOADING";
export const HAS_ERROR = "HAS_ERROR";
export const SET_DATA = "SET_DATA";

export const ADD_TODO = "ADD_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

//초기상태
const initialState = {
  todos: [],
  status: "idle",
};

//리듀서
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, status: "loading" };
    case HAS_ERROR:
      return { ...state, status: "error" };
    case SET_DATA:
      return { ...state, todos: action.payload, status: "completed" };
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
