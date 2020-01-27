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
  const parent = document.querySelector('.weather');
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

    let isOpen = true;
    parent.addEventListener('click', () => {
      if (isOpen === true) {
        parent.classList.add('open');
        const { current } = state;
        forecastController(current);
        isOpen = false;
      }
    });
  }
};

// Forecast controller
const forecastController = async current => {
  if (!state.forecast && state.current) state.forecast = new Forecast(current);

  // Getting Forecast data
  await state.forecast.getForecast();

  // Render Forecast Container
  const weather = document.querySelector('.weather');
  forecastView.renderForecastContainer(weather, state.forecast.buttonDays);

  // Render Forecast navigation buttons
  const navbar = document.querySelector('.forecast__nav');

  // Handle navigation buttons

  navbar.addEventListener('click', e => {
    const id = e.target.closest('.forecast__nav__day').dataset.itemid;
    const buttons = document.querySelectorAll('.forecast__nav__day');
    const forecastContainer = document.querySelector('.forecast__list')

    // Adding active class for active button
    buttons.forEach(el => {
      el.classList.remove('active');
    });
    buttons[id].classList.add('active');

    forecastView.clearForecast(forecastContainer);


    // Render dayly forecast list
    state.forecast.weather[id].forEach(el =>
      forecastView.renderForecast(el, forecastContainer)
    );
  });
};

// App running
window.addEventListener('load', () => {
  clearUI(elements.container);
  homeView.renderHome();

  state.darkMode = new DarkMode();
  state.darkMode.readMode();
  darkmodeController();

  currentController();
});
