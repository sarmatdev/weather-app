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

// ----- CONTROLLERS -----

// DARKMODE CONTROLLER

const darkmodeController = () => {
  if (state.darkMode.dark === 1) {
    elements.body.classList.add('dark');
    checkbox.checked = true;
  } else if (state.darkMode.dark === 0) {
    elements.body.classList.remove('dark');
    state.darkMode.saveMode();
    checkbox.checked = false;
  }
};

const checkbox = elements.checkbox;

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    state.darkMode.dark = 1;
    state.darkMode.saveMode();
  } else if (!checkbox.checked) {
    state.darkMode.dark = 0;
    state.darkMode.saveMode();
  }
});

// Current Location Controller
const currentController = async () => {
  // Render loader
  renderLoader(elements.weatherContainer);

  // Create Current instance in state.current if it is empty
  if (!state.current) state.current = new Current();

  // Checking coords availability
  if (state.current.coordAvailable() < 2) {
    // Getting coords
    await state.current.getCoords();

    // Getting Current Weather
    await state.current.getCurrentWether();

    // Clear Loader
    clearLoader();

    // Render Results on UI
    homeView.renderCurrentWeather(state.current);
  }
};

// Forecast controller
const forecastController = async () => {
  if (!state.forecast) state.forecast = new Forecast();

  await state.forecast.getForecast();
};

// App running
window.addEventListener('load', () => {
  currentController();
  forecastController();

  state.darkMode = new DarkMode();
  state.darkMode.readMode();
  darkmodeController();
  state.darkMode.readMode();
  console.log(state.darkMode.dark);
});
