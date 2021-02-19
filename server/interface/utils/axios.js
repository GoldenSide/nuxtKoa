import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.HOST || "localhost"}:${process.env.prot ||
    3000}`,
  timeout: 1000,
  headers: {}
});

export default instance;