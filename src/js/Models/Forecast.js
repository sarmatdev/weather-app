import axios from 'axios';
import moment from 'moment';

export default class Forecast {
  constructor() {}

  async getForecast() {
    try {
      const res = await axios.get(
        `${process.env.PROXY}https://api.openweathermap.org/data/2.5/forecast?lat=44&lon=44&units=metric&appid=${process.env.APIKEY}`
      );
      console.log(res);
      const result = res.data.list[0].dt

      console.log(moment().toString(result));
      console.log(res.data.list[0].dt_txt);

      console.log(result);

    } catch (error) {
      console.log(error);
    }
  }
}
