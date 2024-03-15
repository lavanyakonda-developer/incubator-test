import axios from "axios";

// export const API =
//   process.env.NODE_ENV === "production"
//     ? "https://your-production-api.com" //TODO
//     : "http://localhost:8000/";

// export const socketAPI =
//   process.env.NODE_ENV === "production"
//     ? "https://your-production-api.com" //TODO
//     : "http://localhost:3001";

export const API = "http://3.27.106.209:8000/";
export const socketAPI = "http://3.27.106.209:3001";

export const makeRequest = axios.create({
  baseURL: API,
  withCredentials: true,
});
