// Models
import Current from './Models/Current';

// Views
import * as base from './Views/base';
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

  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
    state.current.getCurrentWether();
  }
};

// ----- VIEWS -----

// App running
window.addEventListener('load', () => {
  currentController();
});
