$('#myInput').keydown(function(e) {
var key = e.which;
if (key == 13) {
// As ASCII code for ENTER key is "13"
e.preventDefault();
document.getElementById('myBtn').click();
console.log('works')
}
});

// USE PARAMETERS IN FUNCTION TO DISPLAY DATA THEN CALL FUNCTION ON LOAD AND ON SUBMISSION OF FORM, SHOW FUNCTION!
// Get Header
var city1 = ''
var line = document.getElementById('header');
var city2 = '';
line.style.display = "none";
//reloads the page on click of the button
function reloadme(){
    location.reload();
}


$.getJSON('http://api.ipstack.com/203.214.108.94?access_key=8a8643eeca41ecd7995d750324aa2a31&format=1', function(data){
console.log(data.city);
window.city1 = data.city;
console.log(city1)

var request = new XMLHttpRequest();
var temperature = 0;
var typeofweather = "";
console.log(city1)
request.open('GET',' http://api.openweathermap.org/data/2.5/weather?appid=51c872f7046b87fbfc16c20f61d62ba0&q=' + city1);

request.onload = function () {
    console.log(city1);
    "use strict";
    var data = JSON.parse(this.response);
    var body = document.body.style;

    if (request.status >= 200 && request.status < 400) { //if the request is working
        console.log(parseFloat(data.main.temp) - 273.15);
        temperature = parseFloat(data.main.temp) - 273.15;//converting from kelvin to celsius
        typeofweather = data.weather[0].main;
        line.style.display = "block";
        line.innerHTML = "Your City Is: " + city1 + ", the temperature is " + temperature + "°C and the type of weather is: " + typeofweather;
        console.log(typeofweather);
        if (typeofweather == "Clouds"){ //makes the background clouds
            console.log("this works")
            body.backgroundImage="url('clouds.jpg')";
            body.backgroundRepeat = "none";
            body.backgroundSize = "cover";
        }
        else if (typeofweather == "Smoke" || typeofweather == "Haze") {
          line.style.color = "white";
          body.backgroundImage="url('hazy.jpg')";
          body.backgroundRepeat = "none";
          body.backgroundSize = "cover";
        }
        else if (typeofweather == "Dust") {
          line.style.color = "white";
          body.backgroundImage = "url('duster.jpg')";
          body.backgroundRepeat= "none";
          body.backgroundSize = "cover";
        }
        else if (typeofweather == "Clear") {
          body.backgroundImage="url('sunny.jpg')";
          body.backgroundRepeat= "none";
          body.backgroundSize= "cover";
          line.style.color = "white";
        }
        else if (typeofweather = "Rain") {
          body.backgroundImage = "url('rain.jpg')";
          body.backgroundRepeat = "none";
          body.backgroundSize = "cover";
        }
        else{
            body.backgroundImage = ("none")
        }
        console.log(typeofweather)
    }
    else {
        console.log('Error');
    }
}
  request.send();
});

  // by default:

      //connecting to api

  // finish section 1
  function show(){//when submitting request show this

      //connecting to api
      var request = new XMLHttpRequest();
      var city = document.getElementById("myInput").value;
      var temperature = 0;
      var typeofweather = "";

  request.open('GET',' http://api.openweathermap.org/data/2.5/weather?appid=51c872f7046b87fbfc16c20f61d62ba0&q=' + city);

  request.onload = function () {

      "use strict";
      var data = JSON.parse(this.response);
      var body = document.body.style;

      if (request.status >= 200 && request.status < 400) { //if the request is working
          console.log(parseFloat(data.main.temp) - 273.15);
          temperature = parseFloat(data.main.temp) - 273.15;//converting from kelvin to celsius
          typeofweather = data.weather[0].main;
          line.style.display = "block";
          line.innerHTML = "Your City Is: " + city + ", the temperature is " + temperature + "°C and the type of weather is: " + typeofweather;
          console.log(city);
          console.log(typeofweather);
          if (typeofweather == "Clouds"){ //makes the background clouds
              console.log("this works")
            body.backgroundImage="url('clouds.jpg')";
            body.backgroundRepeat = "none";
            body.backgroundSize = "cover";
        }
        else if (typeofweather == "Smoke" || typeofweather == "Haze") {
          line.style.color = "white";
          body.backgroundImage="url('hazy.jpg')";
          body.backgroundRepeat = "none";
          body.backgroundSize = "cover";
        }
        else if (typeofweather == "Dust") {
          line.style.color = "white";
          body.backgroundImage = "url('duster.jpg')";
          body.backgroundRepeat= "none";
          body.backgroundSize = "cover";
        }
        else if (typeofweather == "Clear") {
          body.backgroundImage="url('sunny.jpg')";
          body.backgroundRepeat= "none";
          body.backgroundSize= "cover";
          line.style.color = "white";
        }
        else if (typeofweather == "Rain") {
          line.style.color = "white";
          body.backgroundImage = "url('rain.jpg')";
          body.backgroundRepeat = "none";
          body.backgroundSize = "cover";
        }
        else if (typeofweather == "Mist") {
          body.backgroundImage = "url('mist.jpg')";
          body.backgroundRepeat = "none";
          body.backgroundSize = "cover";
          line.style.color = "black";
        }
        else{

            body.backgroundImage = ("none")
        }
        console.log(typeofweather)
    }
    else {
        console.log('Error');
    }
};
    request.send();

}

console.log(city1)
