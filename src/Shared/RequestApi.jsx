import axios from "axios";
// import { toast } from "react-toastify"; 

const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

export const publicRequest = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
