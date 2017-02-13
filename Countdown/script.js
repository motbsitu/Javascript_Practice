var secondsRemaining;
var intervalHandle;

function resetPage(){
  document.getElementById('inputArea').style.display = "block";
}

function tick(){
  var timeDisplay = document.getElementById('time');
  //seconds to mm:ss
  var min = Math.floor(secondsRemaining / 60);//take just the first part of number 4.3 is 4
  var sec = secondsRemaining - (min * 60);
  //add zero as string to beginning if less than 10 sec
  if (sec <10){
    sec = '0' + sec;
  }
  //add colon
  var message = min.toString() + ":" + sec;

  timeDisplay.innerHTML = message;

  if(secondsRemaining === 0){
    alert('Done!');
    clearInterval(intervalHandle);
    resetPage();
  }
  //subtract 1 from seconds remaining
  secondsRemaining--;
}



function startCountdown(){
  var minutes = document.getElementById('minutes').value;
  if (isNaN(minutes)){
    alert("Please enter a number!");
    return;
  }
  secondsRemaining = minutes * 60;
  intervalHandle = setInterval(tick, 1000);
  //hide input when running
  document.getElementById('inputArea').style.display = 'none';
}

//on page load add the input and button
window.onload = function(){
  var inputMinutes = document.createElement('input');
  inputMinutes.setAttribute('id', 'minutes');
  inputMinutes.setAttribute('type', 'text');

  var startButton = document.createElement('input');
  startButton.setAttribute('type', 'button');
  startButton.setAttribute('value', 'Start Countdown');
  startButton.onclick = function(){
    startCountdown();
  };

  document.getElementById('inputArea').appendChild(inputMinutes);
  document.getElementById('inputArea').appendChild(startButton);
};
