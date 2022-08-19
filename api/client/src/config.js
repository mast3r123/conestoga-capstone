import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://conestogabooking.herokuapp.com/api/",
});
