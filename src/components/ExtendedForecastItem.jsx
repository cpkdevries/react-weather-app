var React = require('react');

var ExtendedForecastItem = React.createClass({
  render : function() {
    var twoTimes = {
      fontSize: "200%"
    };
    var listStyle = {
      margin: "15px 0",
      borderBottom: "1px solid #d3d3d3",
      paddingBottom: 8
    };
    return (
      <li style={listStyle} className="extendedForecastItem">
        <div className="row">
          <div className="col-xs-4">
            {this.props.date}
          </div>
          <div className="col-xs-4 text-center">
            <i style={twoTimes} className={this.props.icon}></i>
          </div>
          <div className="col-xs-4 text-right">
            {this.props.low}&deg;/{this.props.high}&deg;
          </div>
        </div>
      </li>

    );
  }
});

module.exports = ExtendedForecastItem;
