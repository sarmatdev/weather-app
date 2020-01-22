import { elements } from './base';

export const clearForecast = () => {
  elements.forecastContainer.innerHTML = '';
};

export const renderForecastNav = (day, id) => {
  const markup = `<li class="day" data-itemid=${id}>${day}</li>`;
  elements.forecastNav.insertAdjacentHTML('beforeend', markup);
};

export const renderForecast = result => {
  const markup = `
    <div class="forecast__weather animated fadeInUp faster">
      <div class="forecast__weather__date">${result.date}</div>
      <div class="forecast__weather__details">
        <div class="forecast__weather__details__info">
          <svg class="forecast__weather__details--icon">
            <use xlink:href="#${result.icon}"></use>
          </svg>
          <div class="forecast__weather__details__text">
            <div class="forecast__weather__details__text--phrase">${result.phrase}</div>
            <div class="forecast__weather__details__text--minmax">${result.temp_min}<span>•</span>${result.temp_max}</div>
          </div>
        </div>
        <div class="forecast__weather__details__temp">${result.temp}ºC</div>
      </div>
    </div>
    `;
  elements.forecastContainer.insertAdjacentHTML('beforeend', markup);
};
