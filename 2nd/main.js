const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const updateClock = function(){

    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const h = now.getHours();
    
    let second = (sec * 6) + 90;
    let minute = (min * 6) + 90;
    let hours = ((h * 30) + 90);

    
    
    secHand.style.transform = `rotate(${second}deg )`;
    minHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`
}

setInterval(() => updateClock(), 1000);