// Models
import Current from './Models/Current';

// Views
import { elements } from './Views/base';
import * as homeView from './Views/homeView';

// CSS
import '../css/main.scss';

// SVG
import '../img/symbol-defs.svg';

// Global state of the App
const state = {};

// ----- CONTROLLERS -----

// Current Location Controller
const currentController = async () => {
  // Create Current instance in state.current if it is empty
  if (!state.current) state.current = new Current();

  // Checking coords availability
  if (state.current.coordAvailable() < 2) {
    // Getting coords
    await state.current.getCoords();

    // Getting Current Weather
    await state.current.getCurrentWether();

    // Prepare UI
    /* Loading spinner */

    // Render Results on UI
    console.log(state.current);

    homeView.renderCurrentWeather(state.current);
  }
};

// App running
window.addEventListener('load', () => {
  currentController();
});
