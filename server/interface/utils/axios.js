import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.HOST || "localhost"}:${process.env.prot ||
    3000}`,
  timeout: 1000,
  withCredentials: true,
  headers: {}
});

export default instance;
