var h = {
  convertToCelcius : function(tempKelvin) {
    return Math.round((tempKelvin - 273.15));
  }
}

module.exports = h;
