var React = require('react');
var ReactDOM = require('react-dom');
var ForecastPanel = require('./components/ForecastPanel.jsx');

ReactDOM.render(<ForecastPanel headerBackground="#ec4444" location="Barrie,ON" />, document.getElementById('main1'));
ReactDOM.render(<ForecastPanel headerBackground="#79b8af" location="Gravenhurst,ON"/>, document.getElementById('main2'));
ReactDOM.render(<ForecastPanel headerBackground="#e6834f" location="MontegoBay,JM"/>, document.getElementById('main3'));
