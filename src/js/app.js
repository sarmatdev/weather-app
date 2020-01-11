// Models
import Current from './Models/Current';

// Views
import * as base from './Views/base';
import * as homeView from './Views/homeView';

// CSS
import '../css/main.scss';

// SVG
import '../img/symbol-defs.svg';

const current = new Current();

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      current.getCurrentWether(lat, lon);
    },
    error => {
      console.log(error);
    }
  );
}