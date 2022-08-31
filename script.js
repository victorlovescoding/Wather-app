const APIKey = 'f128768fb6e16c1ae3d7398647724c6c';
const form = document.getElementById('form');
const city = document.getElementById('city');
const content = document.getElementById("content");
const weatherEl = document.getElementById("weatherEl");
const tempEl = document.getElementById("tempEl");
const img = document.getElementById("img");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}`).then(function(response){
        return response.json();
    }).then(function(data){
        
      let temp = Math.floor((data.main.temp)-273.15);
      let weather = data.weather[0].main;
      
      weatherEl.innerHTML = weather;
      tempEl.innerHTML = temp+"°C";
      document.getElementById("img").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
})
.catch((error) => {
    alert(error)
  });

// .catch(function (error) {
//     // alert("Did not find the location ")
//     alert(error)
// })

//https://openweathermap.org/img/w/${data.weather[0].icon}.png

//  {"coord":{"lon":120.6167,"lat":32.2972},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":300.94,"feels_like":306.9,"temp_min":300.94,"temp_max":300.94,"pressure":1007,"humidity":94,"sea_level":1007,"grnd_level":1006},"visibility":10000,"wind":{"speed":4.03,"deg":90,"gust":9.92},"clouds":{"all":0},"dt":1659103528,"sys":{"type":2,"id":2000047,"country":"CN","sunrise":1659042589,"sunset":1659092279},"timezone":28800,"id":1548444,"name":"Taoyuan","cod":200}
