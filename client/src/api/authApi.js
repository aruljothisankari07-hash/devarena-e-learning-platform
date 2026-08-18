import axios from "axios";

const API = axios.create({
  baseURL: "https://devarena-e-learning-platform.onrender.com/api",
});

export default API;