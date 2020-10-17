const dataInterval = '2020-11-10';

function getClock(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t.total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
};
function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    }else {
       return num;
    }
}
function setClock(selector, argument) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          minutes = timer.querySelector('#minuts'),
          seconds = timer.querySelector('#seconds'),
          timingInterval = setInterval(updateClock, 1000);

          updateClock();
          function updateClock() {
              const t = getClock(argument);
                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);
          }
          if(t.total <= 0){
            clearInterval(timingInterval)
          }
}
setClock('.timer', dataInterval);