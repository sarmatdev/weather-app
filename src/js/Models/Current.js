import axios from 'axios';

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
      console.log();
    }
  });
};

export default class Current {
  constructor() {
    this.coords = [];
  }

  // Get Coords from getCurrentLocation Promise
  async getCoords() {
    try {
      const data = await getCurrentLocation();
      this.coords = [data.coords.latitude, data.coords.longitude];
    } catch (error) {
      console.log(error)      
    }
  }

  // Checking this.coords availability, and if it's available execute getCurrentWether function
  coordAvailable() {
    return this.coords.length;
  }

  // Get Current Weather
  async getCurrentWether() {
    try {
      const res = await axios.get(
        `${process.env.PROXY}api.openweathermap.org/data/2.5/weather?lat=${this.coords[0]}&lon=${this.coords[1]}&units=metric&appid=${process.env.APIKEY}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
