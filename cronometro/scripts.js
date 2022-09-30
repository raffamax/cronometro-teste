var ms = 0
var sec = 0
var min = 0
var hour = 0
var interval= 0;

function twodigits(digit) {
    if(digit < 10){
        return ('0'+ digit)
    } else return (digit)
}

function start() {
    if (ms == 0 && sec == 0 && min == 0 && hour == 0) {
    interval = setInterval(cronos, 10)
    }
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    ms = 0
    sec = 0
    min = 0
    hour = 0
    document.getElementById('time').innerText = twodigits(hour)+':'+twodigits(min)+':'+twodigits(sec)+':'+twodigits(ms)

}

function cronos() {
        ms++
    if(ms==100){
        sec++
        ms = 0
    } if (sec==60){
        min++
        sec = 0
        ms = 0
    } if (min==60){
        hour++
        min = 0
        sec = 0
        ms = 0
    }
    document.getElementById('time').innerText = twodigits(hour)+':'+twodigits(min)+':'+twodigits(sec)+':'+twodigits(ms)

}