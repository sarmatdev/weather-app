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
          <p class="weather__detail--text">${current.weather.name}</p>
          <div class="weather__detail--minmax">
            <svg class="weather__detail--minmax__icon">
              <use xlink:href="#symbol-defs_min-temp"></use>
            </svg>
            <p>${current.weather.temp_min}ºc</p>
            <span>•</span>
            <p>${current.weather.temp_max}ºc</p>
            <svg class="weather__detail--minmax__icon">
              <use xlink:href="#symbol-defs_max-temp"></use>
            </svg>
          </div>
        </div>
      </div>
  `;

  elements.weatherContainer.insertAdjacentHTML('afterbegin', markup);
};
