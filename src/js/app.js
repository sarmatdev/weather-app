// Models
import Current from './Models/Current';
import Forecast from './Models/Forecast';
import DarkMode from './Models/Dark';

// Views
import {
  elements,
  renderLoader,
  clearUI,
  clearLoader,
  modeState
} from './Views/base';
import * as homeView from './Views/homeView';
import * as forecastView from './Views/forecastView';

// CSS
import '../css/main.scss';

// SVG
import '../img/symbol-defs.svg';

/*
  Hard code import SVG Weather icons
  Temporary solution, will be fixed!
*/
import '../img/weather/01d.svg';
import '../img/weather/01n.svg';
import '../img/weather/02d.svg';
import '../img/weather/02n.svg';
import '../img/weather/03d.svg';
import '../img/weather/03n.svg';
import '../img/weather/04d.svg';
import '../img/weather/04n.svg';
import '../img/weather/09d.svg';
import '../img/weather/09n.svg';
import '../img/weather/10d.svg';
import '../img/weather/10n.svg';
import '../img/weather/11d.svg';
import '../img/weather/11n.svg';
import '../img/weather/13d.svg';
import '../img/weather/13n.svg';
import '../img/weather/50d.svg';
import '../img/weather/50n.svg';

// Global state of the App
const state = {};
window.state = state;

// ----- CONTROLLERS -----

// DARKMODE CONTROLLER
const darkmodeController = () => {
  const checkbox = document.querySelector('input[name="dark"]');
  if (state.darkMode.dark === 1) {
    checkbox.checked = true;
    elements.body.classList.add('dark');
  } else if (state.darkMode.dark === 0) {
    checkbox.checked = false;
    elements.body.classList.remove('dark');
  }

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      state.darkMode.dark = 1;
      state.darkMode.saveMode();
      elements.body.classList.add('dark');
    } else if (!checkbox.checked) {
      state.darkMode.dark = 0;
      state.darkMode.saveMode();
      elements.body.classList.remove('dark');
    }
  });
};

// Current Location Controller
const currentController = async () => {
  // Render loader
  const parent = document.querySelector('.weather-container');
  renderLoader(parent);

  // Create Current instance in state.current if it is empty
  if (!state.current) state.current = new Current();

  // Checking coords availability
  if (state.current.coordAvailable() < 2) {
    // Getting coords
    await state.current.getCoords();
  }

  if (state.current.coordAvailable() === 2) {
    // Getting Current Weather
    await state.current.getCurrentWether();

    // Clear Loader
    clearLoader();

    // Render Results on UI
    homeView.renderCurrentWeather(state.current, parent);

    parent.addEventListener('click', () => {
      const { current } = state;
      forecastController(current);
    });

  }
};

// elements.weatherContainer.addEventListener('click', () => {
//   const { current } = state;
//   forecastController(current);
// });

// Forecast controller
const forecastController = async current => {
  if (!state.forecast && state.current) state.forecast = new Forecast(current);

  await state.forecast.getForecast();

  // Render Forecast navigation buttons
  // state.forecast.buttonDays.forEach((el, index) =>
  //   forecastView.renderForecastNav(el, index)
  // );

  // forecastView.renderForecast(state.forecast.weather[1])
  // for (let i = 0; i < state.forecast.weather.length; i++) {
  //   forecastView.renderForecast(state.forecast.weather[i]);
  // }

  // Handle navigation buttons

  // elements.forecastNav.addEventListener('click', e => {
  //   const id = e.target.closest('.day').dataset.itemid;
  //   forecastView.clearForecast();

  //   // Render days group
  //   state.forecast.weather[id].forEach(el => forecastView.renderForecast(el));

  //   // state.forecast.weather.forEach(el => forecastView.renderForecast(el));
  // });
};

// App running
window.addEventListener('load', () => {
  // clearUI(elements.container);
  // homeView.renderHome();

  state.darkMode = new DarkMode();
  state.darkMode.readMode();
  // darkmodeController();

  // currentController();
});
