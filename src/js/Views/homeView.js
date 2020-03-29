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


    <div class="weather">

  </div>
  `;

  elements.container.innerHTML = markup;
};

export const renderCurrentWeather = (current, parent) => {
  const markup = `
        <h1 class="weather__location">${current.city}, ${current.country}</h1>
        <div class="weather__info">
          <svg class="weather__icon">
            <use xlink:href="#${current.weather.icon}"></use>
          </svg>
          <div class="weather__temp">${current.weather.temp}ºC</div>
        </div>

        <div class="weather__detail">
          <p class="weather__text">${current.weather.name}</p>
          <div class="weather__minmax">
            <span>${current.weather.temp_min}ºc</span>
            <span>•</span>
            <span>${current.weather.temp_max}ºc</span>
          </div>
        </div>
  `;
  parent.innerHTML = markup;
};
