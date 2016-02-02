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
    var directions = ["NORTH", "NORTH-NORTHEAST", "NORTHEAST", "EAST-NORTHEAST", "EAST", "EAST-SOUTHEAST", "SOUTHEAST", "SOUTH-SOUTHEAST", "SOUTH", "SOUTH-SOUTHWEST", "SOUTHWEST", "WEST-SOUTHWEST", "WEST", "WEST-NORTHWEST", "NORTHWEST", "NORTH-NORTHWEST"];
    var index = Math.floor(((angle/22.5) + 0.5));
    return directions[index];
  },
  convertToKmH : function(speed) {
    return (speed * 3.6).toFixed(1) + "km/h";
  },
  getWeatherIcon : function(image) {
    var iconClasses = {
      "01n": "wi wi-night-clear",
      "01d": "wi wi-day-sunny",
      "02n": "wi wi-night-alt-cloudy",
      "02d": "wi wi-day-cloudy",
      "03n": "wi wi-night-cloudy",
      "03d": "wi wi-cloud",
      "04n": "wi wi-night-cloudy-high",
      "04d": "wi wi-cloudy",
      "09n": "wi wi-night-alt-rain",
      "09d": "wi wi-day-showers",
      "10n": "wi wi-night-sprinkle",
      "10d": "wi wi-rain",
      "11n": "wi wi-night-alt-lightning",
      "11d": "wi wi-day-lightning",
      "13n": "wi wi-night-alt-snow",
      "13d": "wi wi-day-snow",
      "50n": "wi wi-night-fog",
      "50d": "wi wi-day-fog"
    }
    return iconClasses[image];
  },
  getWindDirectionIcon : function(direction) {
    var directions = {
      "NORTH": "wi wi-wind wi-from-n",
      "NORTH-NORTHEAST": "wi wi-wind wi-from-nne",
      "NORTHEAST": "wi wi-wind wi-from-ne",
      "EAST-NORTHEAST": "wi wi-wind wi-from-ene",
      "EAST": "wi wi-wind wi-from-e",
      "EAST-SOUTHEAST": "wi wi-wind wi-from-ese",
      "SOUTHEAST": "wi wi-wind wi-from-se",
      "SOUTH-SOUTHEAST": "wi wi-wind wi-from-sse",
      "SOUTH": "wi wi-wind wi-from-s",
      "SOUTH-SOUTHWEST": "wi wi-wind wi-from-ssw",
      "SOUTHWEST": "wi wi-wind wi-from-sw",
      "WEST-SOUTHWEST": "wi wi-wind wi-from-wsw",
      "WEST": "wi wi-wind wi-from-w",
      "WEST-NORTHWEST": "wi wi-wind wi-from-wnw",
      "NORTHWEST": "wi wi-wind wi-from-nw",
      "NORTH-NORTHWEST": "wi wi-wind wi-from-nnw"
    }
    return directions[direction];
  }
}

module.exports = h;
