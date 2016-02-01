var React = require('react');

var TodaysWeather = React.createClass({
  render : function() {
    var large = {
      fontSize: "600%",
      padding: 20
    };
    var todaysWeatherStyles = {
      color: "#fff"
    };
    var medium = {
      fontSize: "200%"
    };
    var tempLarge = {
      fontSize: "500%"
    };
    return (
      <div className="todaysWeather" style={todaysWeatherStyles}>
        <div className="row">
          <div className="col-xs-8">
            <h4>{this.props.location}</h4>
            <h5>{this.props.date}</h5>
          </div>
          <div className="col-xs-4">
            <p>Search box?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <i className={this.props.icon} style={large}></i>
          </div>
          <div className="col-xs-6">
            <h1 style={tempLarge}>{this.props.temperature}&deg;C</h1>
            <p>Lo: {this.props.lowTemperature}&deg;C / Hi: {this.props.highTemperature}&deg;C</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <i className="wi wi-wind-direction" style={medium}></i> {this.props.windDirection}
          </div>
          <div className="col-xs-6">
            <i className="wi wi-strong-wind" style={medium}></i> {this.props.windSpeed}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodaysWeather;
