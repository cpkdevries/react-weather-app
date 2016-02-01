// Use Fetch http service
var Fetch = require('whatwg-fetch');
var baseUrl = "http://api.openweathermap.org"; // set base url for API
var apiKey = "&APPID=1a17cc17d46d39511c9bfe7f87d20188"; // set API key (required to make API calls to openweathermap)


var weatherService = {
  get: function(url) { // weatherService.get(url) takes in URL and returns the response in json format.
    return fetch(baseUrl + url + apiKey) // call external API
    .then(function(response) {
      return response.json();
    });
  }
};

// export so that it can be used externally
module.exports = weatherService;
