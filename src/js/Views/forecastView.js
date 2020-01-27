import { elements } from './base';

export const clearForecast = parent => {
  parent.innerHTML = '';
};

export const renderForecastContainer = (parent, day) => {
  const markup = `
  <div class="forecast">
  <header class="forecast__header">Forecast for the next 5 days</header>
  <nav>
    <ul class="forecast__nav">
      <li class="forecast__nav__day" data-itemid="0">${day[0]}</li>
      <li class="forecast__nav__day" data-itemid="1">${day[1]}</li>
      <li class="forecast__nav__day" data-itemid="2">${day[2]}</li>
      <li class="forecast__nav__day" data-itemid="3">${day[3]}</li>
      <li class="forecast__nav__day" data-itemid="4">${day[4]}</li>
    </ul>
  </nav>

  <ul class="forecast__list"></ul>
</div>
  `;
  parent.insertAdjacentHTML('afterend', markup);
};


export const renderForecast = (result, parent) => {
  const markup = `
    <li class="forecast__item animated fadeInUp faster">
          <h3 class="forecast__item__name">${result.date}</h3>
          <div class="forecast__item__details">
            <div class="forecast__item__details__info">
              <svg class="forecast__item__details__info--icon">
                <use xlink:href="#${result.icon}"></use>
              </svg>
            </div>
            <div class="forecast__item__details__data">
              <p class="forecast__item__details__data--phrase">${result.phrase}</p>
              <div class="forecast__item__details__data--minmax">${result.temp_min}ºC•${result.temp_max}ºC</div>
            </div>

            <div class="forecast__item__details__temp">${result.temp}ºC</div>
          </div>
        </li>
    `;
  parent.insertAdjacentHTML('beforeend', markup);
};
