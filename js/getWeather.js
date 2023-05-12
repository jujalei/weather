import { refs } from './refs.js';

function getWeather(data) {
  console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `<div class="weather_header">
      <div class="weather_main">
        <div class="weather_city">${location}</div>
        <div class="weather_status">${weatherStatus}</div>
      </div>
      <div class="weather_icon"><img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}"/></div>
    </div>
    <div class="weather_temp">${temp}</div>
    <div class="weather_feels-like">Feels like: ${feelsLike}</div>`;

  refs.weatherBlockRef.innerHTML = template;
}

export { getWeather };
