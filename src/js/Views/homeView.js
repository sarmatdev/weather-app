import {elements} from './base';

export const renderCurrentWeather = (current) => {
  const markup = `
  <div class="weather__info">
    <h2>Country - ${current.country} </h2>
    <h2>City - ${current.city}</h2>
    <h2>Weather img - ${current.weather.icon}</h2>
    <h2>Temp - ${current.weather.temp}</h2>
  </div>
  `;

  console.log(markup);
  elements.weatherContainer.insertAdjacentHTML('afterbegin', markup);
}