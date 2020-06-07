import axios from "axios";

export const api = axios.create({
  baseURL: "https://todolist-anthony-backend.herokuapp.com/",
});
