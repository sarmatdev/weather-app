export const elements = {
  container: document.querySelector('.container'),
  weatherContainer: document.querySelector('.weather-container'),
  weather: document.querySelector('.weather'),
  body: document.querySelector('body'),
  checkbox: document.querySelector('input[name="dark"]'),
  forecast: document.querySelector('.forecast'),
  forecastNav: document.querySelector('.forecast__nav'),
  forecastWeather: document.querySelector('.forecast__weather'),
  forecastNavButtons: document.querySelectorAll('.day'),
  forecastContainer: document.querySelector('.forecasts__container')
};

// Clear the whole UI
export const clearUI = parent => {
  parent.innerHTML = '';
};

export const renderLoader = parent => {
  const loader = `
  <div class="loader">
        <svg class="cloud" width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 1">
          <g id="cloud2">
          <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M89.8235 48.5294C90.6471 46.0588 91 43.4706 91 40.7647C91 26.5294 79.4706 15 65.2353 15C55.3529 15 46.7647 20.5294 42.4118 28.6471C40.7647 28.1765 39 27.8235 37.2353 27.8235C27.7059 27.8235 20.0588 35.4706 20.0588 45C20.0588 46.1765 20.1765 47.3529 20.4118 48.5294C11.7059 49.8235 5 57.3529 5 66.5294C5 76.6471 13.2353 84.7647 23.2353 84.7647H86.7647C96.8824 84.7647 105 76.5294 105 66.5294C105 57.4706 98.4118 49.9412 89.8235 48.5294Z" fill="#1E4851"/>
          </g>
          <g id="cloud1">
          <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M132.859 48.8235C133.518 46.8471 133.8 44.7765 133.8 42.6118C133.8 31.2235 124.576 22 113.188 22C105.282 22 98.4118 26.4235 94.9294 32.9176C93.6118 32.5412 92.2 32.2588 90.7882 32.2588C83.1647 32.2588 77.0471 38.3765 77.0471 46C77.0471 46.9412 77.1412 47.8824 77.3294 48.8235C70.3647 49.8588 65 55.8823 65 63.2235C65 71.3176 71.5882 77.8118 79.5882 77.8118H130.412C138.506 77.8118 145 71.2235 145 63.2235C145 55.9765 139.729 49.9529 132.859 48.8235Z" fill="#37BAD7"/>
          </g>
          </g>
          </svg>
      </div>
  `;

  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement.removeChild(loader);
};
