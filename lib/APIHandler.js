require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

async function lookUpCurrentWeatherIn(cityName) {
  const url = BASE_URL + `&q=${cityName}`;
  return await axios.get(url);
}

module.exports = {
  lookUpCurrentWeatherIn
}