const darkclounds = document.querySelectorAll('.cloud svg path');
const darkRoom = document.querySelector('.header');
const containerGroup = document.querySelector('.container-group')
const humidityLogos = document.querySelectorAll('.humiditySvg path')
const pressureLogos = document.querySelectorAll('.pressureSvg path');
const sealevelogos = document.querySelectorAll('.seaLevelSvg path');
const grndlevelogos = document.querySelectorAll('.grndLevelSvg path');

function nightMode(sunriseTime, sunsetTime, convertedTime) {
  riseAt = new Date(sunriseTime * 1000);
  setAt = new Date(sunsetTime * 1000);
  console.log(convertedTime.getHours())
  if (convertedTime.getHours() < 6 || convertedTime.getHours() > 18 ) {
    darkclounds.forEach((cloud, index) => {
      cloud.setAttribute('fill', '#07141E');
    })
    darkRoom.classList.add('headerNightMode');
    containerGroup.classList.add('container-groupNightMode');

    humidityLogos.forEach((logo) => {
      logo.setAttribute('fill', 'white')
    })
    pressureLogos.forEach((logo) => {
      logo.setAttribute('fill', 'white')
    })
    sealevelogos.forEach((logo) => {
      logo.setAttribute('fill', 'white')
    })
    grndlevelogos.forEach((logo) => {
      logo.setAttribute('fill', 'white')
    })
  } else if (18 > convertedTime.getHours() > 6) {
    darkclounds.forEach((cloud, index) => {
      cloud.setAttribute('fill', 'white');
    })
    darkRoom.classList.remove('headerNightMode');
    containerGroup.classList.remove('container-groupNightMode');

    humidityLogos.forEach((logo) => {
      logo.setAttribute('fill', 'black')
    })
    pressureLogos.forEach((logo) => {
      logo.setAttribute('fill', 'black')
    })
    sealevelogos.forEach((logo) => {
      logo.setAttribute('fill', 'black')
    })
    grndlevelogos.forEach((logo) => {
      logo.setAttribute('fill', 'black')
    })
  }

}
