const deadline = '2020-10-14';

function getTimerClock(endtime){
    const t = Date.parse(endtime) + Date.parse(new Date()),
        seconds = ((t / 1000) % 60);

        return {
            'total': t.total,
            'seconds': seconds
        }
}
function setClockTimer(selector, endtime){
    const secundomer = document.querySelector(selector),
          seconds = secundomer.querySelector('#secundomer'),
          timeInterval = setInterval(updateClock, 1000);
          updateClock();
          function updateClock(){
              const t = getTimerClock(endtime);

              seconds.innerHTML = t.seconds;
          }
          if(t.total <= 0){
              clearInterval(timeInterval);
          }
}

setClockTimer('.secundomer', deadline);