import { getWeather } from './getWeather.js';
import { refs } from './refs.js';

async function loadWeather(city) {
  refs.weatherBlockRef.innerHTML = `<div class="weather_loading"><img src="./img/loading.gif" alt="Loading" /></div>`;

  const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6c72c76ee9c6752ab902825ceaca1ffa`;

  const response = await fetch(server, { method: 'GET' });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    refs.weatherBlockRef.innerHTML = responseResult.message;
  }
}

if (refs.weatherBlockRef) {
  refs.selectRef.addEventListener('change', () => {
    const city = refs.selectRef.value;
    loadWeather(city);
  });

  // load the initial weather data
  loadWeather('Lviv');
}
