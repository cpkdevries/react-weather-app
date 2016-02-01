var React = require('react');

var ExtendedForecastItem = React.createClass({
  render : function() {
    return (
      <div className="extendedForecastItem">
        <div className="row">
          <div className="col-xs-4">
            {this.props.date}
          </div>
          <div className="col-xs-4 text-center">
            <img src={this.props.icon} alt="Weather icon" />
          </div>
          <div className="col-xs-4 text-right">
            {this.props.low}&deg;/{this.props.high}&deg;
          </div>
        </div>
      </div>

    );
  }
});

module.exports = ExtendedForecastItem;
