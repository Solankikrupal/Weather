const clouds = document.querySelectorAll('.cloud svg path');

clouds.forEach((cloud,index) =>{
  cloud.classList.add('move');
  cloud.style.animationDelay = index+"s";
})
