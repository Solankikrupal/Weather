const sun = document.querySelector('.sun')
function sunriseAnimation(sunriseTime,sunsetTime,mainTime){
  riseAt = new Date(sunriseTime * 1000);
  setAt = new Date(sunsetTime * 1000);
  sunAnimation(riseAt.getHours(),setAt.getHours(),mainTime.getHours())

  // sunriseAnimation(riseAt.getHours(),setAt.getHours())
}
function sunAnimation(risetime,settime,maintime){

    if(maintime<6){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(-1000px,100px)';
    }
    else if(maintime<12&&maintime>6){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(-600px,0px)';
    }
    else if(maintime == 12){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(0px,-250px)';
    }
    else if(maintime>12&&maintime<18){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(500px,0px)';
    }
    else if(maintime=18){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(800px,100px)';
    }
    else if(maintime<18){
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(1000px,100px)';
    }
    else{
      sun.style.transition = 'transform 0.5s ease';
      sun.style.transform = 'translate(-1000px,200px)';

    }









    // if(maintime<=6){
    //   sun.style.transform = 'translate(-850px,100px)';
    // }
    // else if(maintime == 11){
    //   sun.style.transform = 'translate(-700px,100px)';
    // }
    // // else if(maintime>=18){
    // //   sun.style.transform = 'translate(1100px,100px)';
    // // }
    // // else if(maintime == 12){
    // //   sun.style.transform = 'translate(0px,-250px)';
    // // }
    // // else{
    // //   sun.style.transform = 'translate(-1000px,100px)';
    // // }

}
