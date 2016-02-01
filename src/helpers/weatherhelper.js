var h = {
  convertToCelsius : function(tempKelvin) {
    return Math.round((tempKelvin - 273.15));
  },
  formatDate : function(date) {
    var month = date.getMonth();
    var months = {
      0: "Jan.",
      1: "Feb.",
      2: "Mar.",
      3: "Apr.",
      4: "May.",
      5: "Jun.",
      6: "Jul.",
      7: "Aug.",
      8: "Sep.",
      9: "Oct.",
      10: "Nov.",
      11: "Dec."
    }
    return months[month] + " " + date.getDate();
  },
  getWindDirection : function(angle) {
    var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    var index = Math.floor(((angle/22.5) + 0.5));
    return directions[index];
  },
  convertToKmH : function(speed) {
    return (speed * 3.6).toFixed(1) + "km/h";
  }
}

module.exports = h;
