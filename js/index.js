const weatherBlockRef = document.querySelector('#weather');
const selectRef = document.querySelector('#select');

async function loadWeather(city) {
  weatherBlockRef.innerHTML = `<div class="weather_loading"><img src="./img/loading.gif" alt="Loading" /></div>`;

  const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6c72c76ee9c6752ab902825ceaca1ffa`;

  const response = await fetch(server, { method: 'GET' });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlockRef.innerHTML = responseResult.message;
  }
}

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
    <div class="weather_icon"><img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}"  width="90"/></div>
  </div>
  <div class="weather_temp">${temp}</div>
  <div class="weather_feels-like">Feels like: ${feelsLike}</div>`;

  weatherBlockRef.innerHTML = template;
}

if (weatherBlockRef) {
  selectRef.addEventListener('change', () => {
    const city = selectRef.value;
    loadWeather(city);
  });

  // load the initial weather data
  loadWeather('Lviv');
}
