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
            <img src={this.props.icon} alt="Current Weather Icon" width="100" />
          </div>
          <div className="col-xs-6">
            <h1>{this.props.temperature}&deg;C</h1>
            <p>{this.props.lowTemperature}&deg;C/{this.props.highTemperature}&deg;C</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p>{this.props.windDirection}</p>
          </div>
          <div className="col-xs-6">
            <p>{this.props.windSpeed}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodaysWeather;
