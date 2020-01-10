import axios from 'axios'

export default class Current {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  async getCurrentWether() {
    try {
      const res = await axios.get(
        `${process.env.PROXY}api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${process.env.APIKEY}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
