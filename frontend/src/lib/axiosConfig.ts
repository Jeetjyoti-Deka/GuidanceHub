import axios from "axios";

const api = axios.create({
  baseURL: "https://guidancehub-q1qj.onrender.com",
  withCredentials: true,
});

export default api;
