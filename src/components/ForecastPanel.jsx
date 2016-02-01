var React = require('react');
var TodaysWeather = require('./TodaysWeather.jsx');
var ExtendedForecastItem = require('./ExtendedForecastItem.jsx');
var h = require('../helpers/weatherhelper');
var weatherService = require('../services/weatherhttpservice');

var ForecastPanel = React.createClass({
  getInitialState : function() {
    return ({forecast: []});
  },
  componentWillMount : function() {
    // call weatherService's get() function, passing API url. API key is automatically appended within service function.
    weatherService.get("/data/2.5/forecast?q=London,CA&units=metric&format=json")
    .then(function(data) {
      // set component's state to returned json.
      this.setState({forecast: data});
    }.bind(this));
  },
  render : function() {
    if(this.state.forecast.list) {
      var location = this.state.forecast.city.name + ", " + this.state.forecast.city.country;
      var todaysDate = h.formatDate(new Date(this.state.forecast.list[0].dt * 1000));
      var tempInCelsius = Math.round(this.state.forecast.list[0].main.temp);
      var lowInCelsius = Math.round(this.state.forecast.list[0].main.temp_min);
      var highInCelsius = Math.round(this.state.forecast.list[0].main.temp_max);
      var windSpeed = h.convertToKmH(this.state.forecast.list[0].wind.speed);
      var weatherIcon = "http://openweathermap.org/img/w/" + this.state.forecast.list[0].weather[0].icon + ".png";
      return (
        <TodaysWeather location={location} date={todaysDate} temperature={tempInCelsius} lowTemperature={lowInCelsius} highTemperature={highInCelsius} windDirection={h.getWindDirection(this.state.forecast.list[0].wind.deg)} windSpeed={windSpeed} icon={weatherIcon} />
      )
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
});

module.exports = ForecastPanel;
