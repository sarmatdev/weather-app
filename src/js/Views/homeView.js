import { elements } from './base';

export const renderHome = (city, temp, hum) => {
  const markup = `
    <div class="current">
      <div class="title">
        <h1 class="title__text">Current Location</h1>
      </div>
      <div class="card">
        <div class="weather">
          <h2 class="weather__city">${city}</h2>
          <div class="weather__data">
            <p class="weather__data-temp">${temp}</p>
            <p class="weather__data-hum">${hum}</p>
          </div>
        </div>
      </div>
  `;

  elements.container.innerHTML = markup;
};
