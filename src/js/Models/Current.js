import axios from 'axios';

export default class Current {
  constructor() {}

  async getCurrentWether(lat, lon) {
    try {
      const res = await axios.get(
        `${process.env.PROXY}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.APIKEY}`
      );
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }
}
