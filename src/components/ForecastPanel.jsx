var React = require('react');
var TodaysWeather = require('./TodaysWeather.jsx');
var ExtendedForecastItem = require('./ExtendedForecastItem.jsx');
var h = require('../helpers/weatherhelper');
var weatherService = require('../services/weatherhttpservice');

var ForecastPanel = React.createClass({
  getInitialState : function() {
    return ({forecast: [], currentWeather: []});
  },
  componentWillMount : function() {
    // get current weather
    weatherService.get("/data/2.5/weather?q=London,CA&units=metric&format=json")
    .then(function(data) {
      this.setState({currentWeather: data});
    }.bind(this));
    // call weatherService's get() function, passing API url. API key is automatically appended within service function.
    weatherService.get("/data/2.5/forecast/daily?q=London,CA&units=metric&format=json")
    .then(function(data) {
      // set component's state to returned json.
      this.setState({forecast: data});
    }.bind(this));
  },
  render : function() {
    if(this.state.currentWeather.main && this.state.forecast.list) {
      // styles
      var panelHeader = {
        background: "#ec4444",
        borderRadius: 0,
        padding: 20
      };
      var location = this.state.currentWeather.name + ", " + this.state.currentWeather.sys.country;
      var todaysDate = h.formatDate(new Date(this.state.currentWeather.dt * 1000));
      var tempInCelsius = Math.round(this.state.currentWeather.main.temp);
      var lowInCelsius = Math.round(this.state.forecast.list[0].temp.min);
      var highInCelsius = Math.round(this.state.forecast.list[0].temp.max);
      var windSpeed = h.convertToKmH(this.state.currentWeather.wind.speed);
      var weatherIcon = "http://openweathermap.org/img/w/" + this.state.currentWeather.weather[0].icon + ".png";
      console.log(this.state.forecast.list.length);
      var extendedForecastItems = this.state.forecast.list.map(function(item, key){
        // skip today!
        if((item.dt).toString().substring(0, 5) != (Math.floor(Date.now()/1000)).toString().substring(0, 5)) {
          var date = h.formatDate(new Date(item.dt * 1000));
          var icon = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
          return (
            <ExtendedForecastItem
              key={key}
              low={Math.round(item.temp.min)}
              high={Math.round(item.temp.max)}
              icon={icon}
              date={date}
            />
          );
        }
      });
      return (
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <div className="panel panel-default">
              <div className="panel panel-header" style={panelHeader}>
                <TodaysWeather location={location} date={todaysDate} temperature={tempInCelsius} lowTemperature={lowInCelsius} highTemperature={highInCelsius} windDirection={h.getWindDirection(this.state.currentWeather.wind.deg)} windSpeed={windSpeed} icon={weatherIcon} />
              </div>
              <div className="panel panel-body">
                {extendedForecastItems}
              </div>
            </div>
          </div>
        </div>

      )
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
});

module.exports = ForecastPanel;
