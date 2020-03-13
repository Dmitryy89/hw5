
var body = document.body;
var start = document.querySelector('.start');
var pause = document.querySelector('.pause');
var reset = document.querySelector('.reset');
var lap = document.querySelector('.lap');
var lapContainer = document.querySelector('.lapContainer');
var mil = document.querySelector('.milis');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');
var hours = document.querySelector('.hours');
var flag = false;
var i = 0;
pause.style.display = 'none';
lap.style.display = 'none';
pmil = 0, psec = 0, pmin = 0, phours = 0, pauseDate = 0;

function createTimeSection(timeType) {
    var lapTime = document.createElement('div');
    lapTime.classList.add('lapSection');
    lapBlock.appendChild(lapTime);
    lapTime.innerHTML = (timeType);
}
function createTimeBlock(type) {
    i++;
    lapBlock = document.createElement('div');
    lapBlock.classList.add('lapBlock');
    lapContainer.appendChild(lapBlock);
    var lapText = document.createElement('div');
    lapText.classList.add('lapText');
    lapBlock.appendChild(lapText);
    lapText.innerHTML = (type + i);
    createTimeSection(hours + ':' + minutes + ':' + seconds + '.' + milliseconds);
}

function displayStopButton() {
    start.style.display = 'none';
    pause.style.display = '';
    lap.style.display = '';
    reset.style.display = 'none';
}
   
function displayStartButton() {

    start.style.display = '';
    pause.style.display = 'none';
    lap.style.display = 'none';
    reset.style.display = '';
}

function startStopwatch() {
    flag = true;
    initialDate = new Date;
}

function getTime() {
    var currentDate = new Date;
    timer = new Date (currentDate - initialDate +pauseDate);
    milliseconds = Math.round(timer.getMilliseconds()/10);
    seconds = timer.getSeconds();
    minutes = timer.getMinutes();
    hours = timer.getUTCHours();
    if(milliseconds < 10){milliseconds = '0' + milliseconds;}
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
}

function counter() {
    getTime();
    mil.innerHTML = milliseconds;
    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    hours.innerHTML = hours;
}

function displayTimer() {
    timerId = setInterval(counter, 10);    
}
function stopTimer() {
    pmil = milliseconds;
    psec = seconds;
    pmin = minutes;
    phours = hours;
    clearInterval(timerId);
    getTime();
    //createTimeBlock('Pause');
    flag = false;
}
function newLap() {
    if (flag == true){
    getTime();
    createTimeBlock('Lap');
    } else {
        lapBlock = document.createElement('div');
        lapBlock.classList.add('lapBlock');
        lapContainer.appendChild(lapBlock);
        var lapText = document.createElement('div');
        lapText.classList.add('lapText');
        lapBlock.appendChild(lapText);
        lapText.innerHTML = ('PRESS START FIRST');
    }
}
function resetTimer() {
    i = 0;
    flag = false;
    clearInterval(timerId);
    start.style.display = '';
    pause.style.display = 'none';
    mil.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    hours.innerHTML = '00';
    document.querySelector('.lapContainer').innerHTML = '';
}
start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayStopButton);
start.addEventListener('click', displayTimer);
lap.addEventListener('click', newLap);
pause.addEventListener('click', stopTimer);
pause.addEventListener('click', displayStartButton);
reset.addEventListener('click', resetTimer);