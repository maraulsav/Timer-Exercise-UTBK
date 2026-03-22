let totalQuestions;
let currentQuestion=1;
let timePerQuestion;
let timeLeft;
let interval;
let paused=false;
let stopped=false;

function updateDisplay(){
  let min= Math.floor(timeLeft/60);
  let sec= timeLeft%60;
  document.getElementById("timer").innerText=`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  document.getElementById("question").innerText = `Question: ${currentQuestion}`;
}

function resetTimer(){
  clearInterval(interval);
  paused=false;
  stopped=true;
  currentQuestion=0;
  timeLeft=0;
  document.getElementById("questions").value= null;
  document.getElementById("minutes").value=null;
  document.getElementById("seconds").value=null;
  updateDisplay();
}

function startSession(){
  totalQuestions = parseInt(document.getElementById("questions").value)||0;
  let minutes=parseInt(document.getElementById("minutes").value)||0;
  let seconds=parseInt(document.getElementById("seconds").value)||0;

  if (isNaN(totalQuestions)||totalQuestions<=0){
    alert("Please enter a valid number of questions!");
    resetTimer();
    return;
  }
  if(isNaN(minutes)||minutes<0){
    alert("Minutes must be 0 or more!");
    resetTimer();
    return;
  }
  if(isNaN(seconds)||seconds<0||seconds>59){
    alert("Seconds must be between 0-59");
    resetTimer();
    return;
  }

  timePerQuestion=minutes * 60 + seconds;
  if (timePerQuestion === 0) {
    alert("Why do you even use this? \n Timer per question cannot be 0");
    resetTimer();
    return;
  }

  timeLeft=timePerQuestion;
  currentQuestion=1;
  stopped=false;
  paused=false;
  updateDisplay()
  runTimer();
}

function updateTotalTime(){
  let q = parseInt(document.getElementById("questions").value)||0;
  let m = parseInt(document.getElementById("minutes").value) || 0;
  let s = parseInt(document.getElementById("seconds").value)||0;
  let totalSeconds = q * (m *60 +s);
  
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("totalTime").innerText =
    `Total Time: ${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}`;
  if (totalSeconds === 0){
    document.getElementById("totalTime").innerText="Total Time: -";
  }
}


function runTimer(){
  clearInterval(interval);

  interval = setInterval(()=>{
    if(paused||stopped)return;
    updateDisplay();
    timeLeft--;

    if(timeLeft < 0){
      document.getElementById("alarm").play();
      currentQuestion++;

      if(currentQuestion > totalQuestions){
        resetTimer();
        alert("Session finished!");
        return;
      }
      timeLeft = timePerQuestion;
    }
  }, 1000);
}

function pauseTimer(){
  paused = !paused; 
}

function stopTimer(){
  resetTimer();
  alert("Timer stopped");
}