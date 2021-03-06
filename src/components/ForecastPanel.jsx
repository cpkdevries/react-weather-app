var React = require('react');
var TodaysWeather = require('./TodaysWeather.jsx');
var ExtendedForecastItem = require('./ExtendedForecastItem.jsx');
var h = require('../helpers/weatherhelper');
var weatherService = require('../services/weatherhttpservice');

var ForecastPanel = React.createClass({
  getInitialState : function() {
    return ({forecast: [], currentWeather: []});
  },
  handleSearch : function(newLocation){
    this.callWeatherService(newLocation);
  },
  componentWillMount : function() {
    if (this.props.location) {
      this.callWeatherService(this.props.location);
    } else {
      this.callWeatherService("London,CA");
    }
  },
  callWeatherService : function(location) {
    // get current weather
    weatherService.get("/data/2.5/weather?q=" + location + "&units=metric&format=json")
    .then(function(data) {
      this.setState({currentWeather: data});
    }.bind(this));
    // call weatherService's get() function, passing API url. API key is automatically appended within service function.
    weatherService.get("/data/2.5/forecast/daily?q=" + location + "&units=metric&format=json")
    .then(function(data) {
      // set component's state to returned json.
      this.setState({forecast: data});
    }.bind(this));
  },
  render : function() {
    if(this.state.currentWeather.main && this.state.forecast.list) {
      // styles
      var panelHeader = {
        borderRadius: 0,
        padding: 20
      };
      var noList = {
        listStyleType: "none",
        padding: 0
      };
      var panelBodyStyle = {
        padding: "0 15px",
        marginBottom: 0
      };
      var panelStyle = {
        marginTop: 20
      };
      if(this.props.headerBackground) {
        panelHeader.background = this.props.headerBackground;
      } else {
        panelHeader.background = "#000";
      }
      var location = this.state.currentWeather.name + ", " + this.state.currentWeather.sys.country;
      var todaysDate = h.formatDate(new Date(this.state.currentWeather.dt * 1000));
      var tempInCelsius = Math.round(this.state.currentWeather.main.temp);
      var lowInCelsius = Math.round(this.state.forecast.list[0].temp.min);
      var highInCelsius = Math.round(this.state.forecast.list[0].temp.max);
      var windSpeed = h.convertToKmH(this.state.currentWeather.wind.speed);
      var weatherIcon = h.getWeatherIcon(this.state.currentWeather.weather[0].icon);
      var windDirection = h.getWindDirection(this.state.currentWeather.wind.deg);
      var windDirectionIcon = h.getWindDirectionIcon(windDirection);
      var extendedForecastItems = this.state.forecast.list.map(function(item, key){
        // skip today!
        if((item.dt).toString().substring(0, 5) != (Math.floor(Date.now()/1000)).toString().substring(0, 5)) {
          var date = h.formatDate(new Date(item.dt * 1000));
          var icon = h.getWeatherIcon(item.weather[0].icon);
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
        <div className="panel panel-default" style={panelStyle}>
          <div className="panel panel-header" style={panelHeader}>
            <TodaysWeather location={location} date={todaysDate} temperature={tempInCelsius} lowTemperature={lowInCelsius} highTemperature={highInCelsius} windDirection={windDirection} windSpeed={windSpeed} icon={weatherIcon} newSearch={this.handleSearch} windDirectionIcon={windDirectionIcon} />
          </div>
          <div className="panel panel-body" style={panelBodyStyle}>
            <ul style={noList}>{extendedForecastItems}</ul>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
});

module.exports = ForecastPanel;
