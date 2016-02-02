var React = require('react');

var TodaysWeather = React.createClass({
  getInitialState : function() {
    return({location: ""});
  },
  handleClick : function(){
    if(this.props.newSearch) {
      if(this.state.location.trim() != "") {
        this.props.newSearch(this.state.location);
        this.refs.searchTerm.value = "";
        this.setState({location: ""})
      }
    }

  },
  onChange : function(e) {
    this.setState({location: e.target.value});
  },
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
          <div className="col-xs-6">
            <h4>{this.props.location}</h4>
            <h6>Today, {this.props.date}</h6>
          </div>
          <div className="col-xs-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="City" onChange={this.onChange} ref="searchTerm" />
              <span className="input-group-addon" onClick={this.handleClick}><i className="fa fa-search"></i></span>
            </div>
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
            <i className={this.props.windDirectionIcon} style={medium}></i> {this.props.windDirection}
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
