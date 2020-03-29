export const clearForecast = parent => {
  parent.innerHTML = '';
};

export const renderForecastContainer = (parent, day) => {
  const markup = `
  <div class="forecast">
  <header class="forecast__header">Forecast for the next 5 days</header>
  <nav>
    <ul class="nav">
      <li class="nav__day" data-itemid="0">${day[0]}</li>
      <li class="nav__day" data-itemid="1">${day[1]}</li>
      <li class="nav__day" data-itemid="2">${day[2]}</li>
      <li class="nav__day" data-itemid="3">${day[3]}</li>
      <li class="nav__day" data-itemid="4">${day[4]}</li>
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
          <h3 class="forecast__date">${result.date}</h3>
          <div class="forecast__details">
            <div class="forecast__info">
              <svg class="forecast__icon">
                <use xlink:href="#${result.icon}"></use>
              </svg>
            </div>
            <div class="forecast__data">
              <p>${result.phrase}</p>
              <span>${result.temp_min}ºC•${result.temp_max}ºC</span>
            </div>
            <div class="forecast__temp">${result.temp}ºC</div>
          </div>
        </li>
    `;
  parent.insertAdjacentHTML('beforeend', markup);
};
