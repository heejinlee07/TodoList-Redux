import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // params: { api_key: "9635a2a235539b3caf57c91fce352a80"},
});
