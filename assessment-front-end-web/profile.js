const favColorBtn = document.querySelector('#color')
const favPlaceBtn = document.querySelector('#place')
const favRitBtn = document.querySelector('#ritual')
const form = document.querySelector('form')
const inputField = document.querySelector('.text')

const colorFav = (event) =>{
    alert('My favorite color is Red!')
}
const placeFav = (event) =>{
    alert('My favorite place is Stockholm!')
}
const ritualFav = (event) =>{
    alert('My favorite ritual is sacrificing my enemies to gain power!')
}
const submitForm = (event) =>{
    event.preventDefault()
    const submitted = document.createElement('p')
	inputField.value = ''

	submitted.textContent = "Submitted!"
	form.appendChild(submitted)
    
}

favColorBtn.addEventListener('click', colorFav)
favPlaceBtn.addEventListener('click', placeFav)
favRitBtn.addEventListener('click', ritualFav)
form.addEventListener('submit', submitForm)