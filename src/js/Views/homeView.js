import { elements } from './base';

export const renderCurrentWeather = current => {
  const markup = `
  <div class="weather">
        <h1 class="weather__location">${current.city}, ${current.country}</h1>
        <div class="weather__info">
          <svg class="weather__info-icon">
            <use xlink:href="#${current.weather.icon}"></use>
          </svg>
          <div class="weather__info-temp">${current.weather.temp}ºC</div>
        </div>
        <div class="weather__detail">
          <p class="weather__detail-text">${current.weather.name}</p>
          <div class="weather__detail-temp">
            <p class="weather__detail-temp__min">${current.weather.temp_min}</p>
            <span class="dot">•</span>
            <p class="weather__detail-temp__max">${current.weather.temp_max}</p>
          </div>
        </div>
      </div>
  `;

  elements.weatherContainer.insertAdjacentHTML('afterbegin', markup);
};
