import axios from 'axios';
import moment from 'moment';

export default class Forecast {
  constructor(current) {
    this.city = current.city;
  }

  async getForecast() {
    try {
      const res = await axios.get(
        `${process.env.PROXY}https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${process.env.APIKEY}`
      );

      const results = res.data.list.map(el => ({
        date: moment
          .unix(el.dt)
          .utc()
          .format('ddd, Do MMMM, HH:mm'),
        day: moment
          .unix(el.dt)
          .utc()
          .format('D'),
        temp: Math.round(el.main.temp),
        temp_max: Math.round(el.main.temp_max),
        temp_min: Math.round(el.main.temp_min),
        name: el.weather[0].main,
        icon: el.weather[0].icon
      }));
      console.log(results);

      let days = [];
      results.forEach(result => days.push(result.day));
      let uniqueDays = getUniqueDays(days);
      let sortForecast = [];

      function getUniqueDays(arr) {
        return Array.from(new Set(arr));
      }

      const daysList = [];

      daysList.push(results.filter(result => result.day === uniqueDays[0]));
      daysList.push(results.filter(result => result.day === uniqueDays[1]));
      daysList.push(results.filter(result => result.day === uniqueDays[2]));
      daysList.push(results.filter(result => result.day === uniqueDays[3]));
      daysList.push(results.filter(result => result.day === uniqueDays[4]));
      daysList.push(results.filter(result => result.day === uniqueDays[5]));

      console.log(daysList);
    } catch (error) {
      console.log(error);
    }
  }
}
