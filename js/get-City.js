  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const myRecognition = new SpeechRecognition() ;
  const citybtn = document.querySelector('.name-city');
  myRecognition.onstart = function(){
      console.log('start recording after 1s')
  };

    myRecognition.onresult = function(event) {
      console.log(event)

    }
  



  citybtn.addEventListener('click', () => {

    myRecognition.start();


  });
