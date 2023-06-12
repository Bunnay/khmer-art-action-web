import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const accessToken = cookies.get("access_token");

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
  withCredentials: true,
});

export default api;
