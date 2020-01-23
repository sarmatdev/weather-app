import { elements } from './base';

export const renderHome = () => {
  const markup = `
  <div class="darkmode animated fadeInLeft faster">
    <span class="darkmode__text">Dark mode:</span>
    <input type="checkbox" name="dark" id="switch" /><label for="switch">Toggle</label>
  </div>

  <header class="header  animated fadeInDown fast">
    <svg class="header__icon">
      <use xlink:href="#symbol-defs_icon-location-pin"></use>
    </svg>
    <h1 class="header__title">Current Location</h1>
  </header>

  <div class="weather-container animated zoomIn faster">

  </div>
  `;

  elements.container.innerHTML = markup;
};

export const renderCurrentWeather = (current, parent) => {
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
  parent.insertAdjacentHTML('afterbegin', markup);
};
