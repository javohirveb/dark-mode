const showModal = document.getElementById('show-modal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const counterAdd = document.querySelector('.counter__add')
const counterRemove = document.querySelector('.counter__remove')
const headCounter = document.getElementById('head-counter')
const darkMode = document.getElementById('dark-mode')
const darkModeSpan = document.querySelector('span')
const body = document.querySelector('body')

let number = 1


showModal.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
})

counterAdd.addEventListener('click', () => {

    number++
    headCounter.textContent = number

    if(number%5 === 0) {
        headCounter.classList.add('other')
    } else {
        headCounter.classList.remove('other')
    }

})

counterRemove.addEventListener('click', () => {

    if (number === 0) {

    } else {
        number--
        headCounter.textContent = number
    }

    if (number % 5 === 0) {
        headCounter.classList.add('other')
    } else {
        headCounter.classList.remove('other')
    }
})


darkMode.addEventListener('click', () => {
    darkModeSpan.classList.toggle('margin__left')
    body.classList.toggle('dark__mode')
    modal.classList.toggle('bg-dark')
    showModal.classList.toggle('bg-dark')
    closeModal.classList.toggle('text-white')
    counterAdd.classList.toggle('text-white')
    counterRemove.classList.toggle('text-white')
    darkMode.classList.toggle('border-white')
})