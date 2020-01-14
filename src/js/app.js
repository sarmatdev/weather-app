// Models
import Current from './Models/Current';

// Views
import { elements, renderLoader, clearUI, clearLoader } from './Views/base';
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

// App running
window.addEventListener('load', () => {
  currentController();
});
