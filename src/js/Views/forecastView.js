import { elements } from './base';

export const clearForecast = parent => {
  parent.innerHTML = '';
};

export const renderForecastContainer = parent => {
  const markup = `
  <div class="forecast">
  <nav>
    <ul class="forecast__nav">
    </ul>
  </nav>

  <div class="forecasts__container"></div>
</div>
  `;
  parent.insertAdjacentHTML('afterend', markup);
};

export const renderForecastNav = (day, id, parent) => {
  const markup = `<li class="day" data-itemid=${id}>${day}</li>`;
  parent.insertAdjacentHTML('beforeend', markup);
};

export const renderForecast = (result, parent) => {
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
  parent.insertAdjacentHTML('beforeend', markup);
};
