console.log("hello world");
const duck = document.querySelector('img')



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("Form Submitted!")
	// const submitted = document.createElement('p')
	
	// submitted.textContent = "Form submitted!"
	// form.appendChild(submitted)

}
const compliment = event => {
	alert("You come here often? *eyebrow waggle*")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover', compliment)