'use strict'
let dates;
let hours;
let minutes;
let seconds;
let day;
let month;
let year;
const DIALCLOCK = document.querySelector('.clock');
const DIALDATE = document.querySelector('.date');
let strClock = '';
let strDate = '';


function clock() {
    dates = new Date();
    hours = dates.getHours();
    minutes = dates.getMinutes();
    seconds = dates.getSeconds();

    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    strClock = hours + ':' + minutes + ':' + seconds;

    DIALCLOCK.innerHTML = strClock;

    function DATE() {
        day = dates.getDate();
        month = dates.getMonth();
        year = dates.getFullYear();

        strDate = day + '-' + month + '-' + year;

        DIALDATE.innerHTML = strDate;
    }
    DATE();
}

setInterval(clock, 1000);

