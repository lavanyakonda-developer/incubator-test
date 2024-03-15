import axios from "axios";

// export const API =
//   process.env.NODE_ENV === "production"
//     ? "https://your-production-api.com" //TODO
//     : "http://localhost:8000/";

// export const socketAPI =
//   process.env.NODE_ENV === "production"
//     ? "https://your-production-api.com" //TODO
//     : "http://localhost:3001";

export const API = "http://54.252.198.236:8000/";
export const socketAPI = "http://54.252.198.236:3001";

export const makeRequest = axios.create({
  baseURL: API,
  withCredentials: true,
});
