
import axios from "axios";

export default axios.create({
  baseURL: "https://5ec3bb9d628c160016e70826.mockapi.io",
  responseType: "json"
});