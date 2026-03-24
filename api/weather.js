import axios from "axios";

const API_URL = "http://localhost:5000/weather/"

export async function fetchForecast() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching forecast:', error);
  }
}

export async function getForecast() {
  try {
    // request GET do objeto usuário
    const response = await axios.get(API_URL);

    //console.log('Retrieved contacts:', response.data.contacts.length)
    console.log(response.data)
    if (response.data.results.forecast.length > 0) {
      return response;
    } else {
      return "nothing is being returned from the api";
    }

  } catch (error) {
    console.log("Error when trying to get the forecast from API:", error)
    return false;
  }
}

console.log(getForecast())