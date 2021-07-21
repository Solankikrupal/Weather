const cityNameText = document.querySelector('.name-city');
const temperture =document.querySelector('.temperature');
const maxTemp = document.querySelector('.max-temperture');
const minTemp = document.querySelector('.min-temperture')
const timeDate = document.querySelector('.date-time');
const sunriseField = document.querySelector('.sunriseTime');
const sunsetField = document.querySelector('.sunsetTime');
const humidity = document.querySelector('.humidity h3');
const pressure = document.querySelector('.pressure h3');
const sealevel = document.querySelector('.sea-level h3 ');
const grndlevel = document.querySelector('.grnd-level h3 ');
const feelTemp = document.querySelector('.feelTemp');
const cityName = 'Gisborne';
const api_key = '23e1c6f4a29e8adb2cdb9ea21202b5c8';
console.log()
let api = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+" &appid=4d32196c0aa83d91d954d8709f67ee52&units=metric";
  fetch(api)
  .then(response => response.json())
  .then(data=>{
    console.log(data)
    cityNameText.innerHTML = data.name;
    temperture.innerHTML =  data.main.temp + " °C";
    maxTemp.innerHTML = 'Max '+data.main.temp_max + " °C";
    minTemp.innerHTML = 'Min '+data.main.temp_min + " °C";
    humidity.textContent = data.main.humidity+" %";
    pressure.textContent = data.main.pressure+" hpa";
    sealevel.textContent = data.main.sea_level+" hpa";
    grndlevel.textContent = data.main.grnd_level+" hpa";
    feelTemp.textContent = "Feel Like "+ data.main.feels_like + " °C"
    let time = data.timezone;
    let iconMood = data.weather[0].main;
    let iconId = data.weather[0].icon;
    let iconDec = data.weather[0].description;
    let sunriseTime = data.sys.sunrise;
    let sunsetTime = data.sys.sunset;



    convertedTime = convertTime(time);
    formatingTimeAndDate(convertedTime);
    iconDisplay(iconId,iconDec);
    timeSunSetRise(sunriseTime,sunsetTime);
    sunriseAnimation(sunriseTime,sunsetTime,convertedTime);
    nightMode(sunriseTime,sunsetTime,convertedTime)
  })
  let icon = document.querySelector('.icon');
  function iconDisplay(iconId,iconDec){
      icon.setAttribute('src',"http://openweathermap.org/img/wn/"+iconId+"@2x.png");
  }

  function formatingTimeAndDate(timeStamp){
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var indexofDay = timeStamp.getDay();
    timeDate.textContent = timeStamp.getDate()+' '+week[indexofDay]+' / '+timeStamp.getHours()+':'+timeStamp.getMinutes();

  }
  function timeSunSetRise(sunriseTime,sunsetTime){
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    var sunRiseSt = new Date(sunriseTime * 1000);
    var sunSetSt = new Date(sunsetTime * 1000);

    var sunRiseDay = sunRiseSt.getDay();
    sunriseField.textContent =sunRiseSt.getDate()+' '+week[sunRiseDay]+' / '+sunRiseSt.getHours()+':'+sunRiseSt.getMinutes();

    var sunSetDay = sunSetSt.getDay();
    sunsetField.textContent =sunSetSt.getDate()+' '+week[sunSetDay]+' / '+sunSetSt.getHours()+':'+sunSetSt.getMinutes();

  }
