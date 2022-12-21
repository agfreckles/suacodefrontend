import axios from "axios";

export default axios.create({
  baseURL: "https://suacode-production.up.railway.app/api",
});