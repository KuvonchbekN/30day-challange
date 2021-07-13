const menu = document.querySelector('.bar i')
const icons = document.querySelector('.icons')


menu.addEventListener('click', ()=>{
    icons.classList.toggle('active')
})