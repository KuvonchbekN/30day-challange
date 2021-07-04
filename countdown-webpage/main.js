let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let months = document.querySelector('#months')


let birthSecond = 60;
let birthMinute = 60;
let birthHour = 24;
let birthDay = 18 ; 
let birthMonth = 8;

setInterval(() => {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second  = date.getSeconds();


    days.textContent = birthDay - day;
    hours.textContent = birthHour - hour ;
    minutes.textContent =  birthMinute - minute;
    seconds.textContent =   birthSecond - second;
    months.textContent =  birthMonth - month;
}, 1000);


