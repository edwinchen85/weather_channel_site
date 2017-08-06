'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

weatherConditions.open('GET', 'http://api.wunderground.com/api/9885a4395f919785/conditions/q/84653.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send();

weatherConditions.onload = function() {
  if (weatherConditions.status === 200){
      cObj = JSON.parse(weatherConditions.responseText);
      console.log(cObj);

      document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
      document.getElementById('weather').innerHTML = cObj.current_observation.weather;
      document.getElementById('temperature').innerHTML = cObj.current_observation.temp_f;
  }
};



weatherForecast.open('GET', 'http://api.wunderground.com/api/9885a4395f919785/forecast/q/84653.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = function() {
  if (weatherForecast.status === 200){
    fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);

    document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext

    // Day 1
    document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
    document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit+"°";
    document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit+"°";
    var imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url;
    document.getElementById('r1c2').src = imagePath;

    // Day 2
    document.getElementById('r2c1').innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
    document.getElementById('r2c3').innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.fahrenheit+"°";
    document.getElementById('r2c4').innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.fahrenheit+"°";
    var imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url;
    document.getElementById('r2c2').src = imagePath;

  }
};
