import axios from "axios";

const API_URL = "http://localhost:5000/weather/"
const ICON_URL = "http://localhost:5000/proxy-icon/"

export async function getForecast() {
  try {
    // request GET do forecast
    const response = await axios.get(API_URL);

    //console.log(response.data)
    if (response.data.results.forecast.length > 0) {
      return response.data;
    } else {
      return "nothing is being returned from the api";
    }

  } catch (error) {
    console.log("Error when trying to get the forecast from API:", error)
    return false;
  }
}

export const getIcon = (condition) => {
  return axios.get(`${ICON_URL}`, {
    params: { condition },
  });
};