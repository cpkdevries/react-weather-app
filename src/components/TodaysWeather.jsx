var React = require('react');

var TodaysWeather = React.createClass({
  render : function() {
    return (
      <div className="todaysWeather">
        <div className="row">
          <div className="col-xs-8">
            <h4>{this.props.location}</h4>
            <h4>{this.props.date}</h4>
          </div>
          <div className="col-xs-4">
            <p>Search box?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <img src="http://www.iconarchive.com/download/i43438/oxygen-icons.org/oxygen/Status-weather-clear.ico" alt="weather icon" />
          </div>
          <div className="col-xs-6">
            <h1>{this.props.temperature}&deg;C</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p>Wind direction</p>
          </div>
          <div className="col-xs-6">
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodaysWeather;
