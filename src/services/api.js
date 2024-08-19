import axios from "axios";

// axios.defaults.baseURL = "http://127.0.0.1:8001/wines/reds/";
// const api_key = "eef58e7402eb4560bd5a271abcaa31e6";

export async function fetchWines() {
  const response = await axios.get(`http://127.0.0.1:8001/wines/reds/`);
  return response.data.results;
}

// http://127.0.0.1:8001/wines/random-bottle-wine/

export async function fetchRandomBottleOfWine() {
  const response = await axios.get(
    `http://127.0.0.1:8001/wines/random-bottle-wine/`
  );
  return response.data.results[0];
}

// http://127.0.0.1:8001/wines/bestsellers-three-bottle-wine

export async function fetchThreeBottles() {
  const response = await axios.get(
    `http://127.0.0.1:8001/wines/bestsellers-three-bottle-wine`
  );
  return response.data.results;
}

// http://127.0.0.1:8001/wines/all/

export async function fetchAllWines() {
  const response = await axios.get(`http://127.0.0.1:8001/wines/all/`);
  return response.data.results;
}
