const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', ()=>{
    showNotif();
})

function showNotif(){
    const notif = document.createElement('div')
    notif.classList.add('box');

    notif.textContent = 'You have a new message from anonymous person!'
    container.append(notif);

    setTimeout(() => {
        notif.classList.add('transform')
    }, 2000);

    setTimeout(() => {
        notif.classList.add('display')
    }, 4000);    
}