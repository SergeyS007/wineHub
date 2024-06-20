import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8001/wines/reds/";
// const api_key = "eef58e7402eb4560bd5a271abcaa31e6";

export async function fetchWines() {
  const response = await axios.get(`http://127.0.0.1:8001/wines/reds/`);
  return response.data.results;
}
