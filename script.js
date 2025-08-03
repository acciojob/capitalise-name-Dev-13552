//your JS code here. If required.
const input = document.querySelector('#fname')
input.addEventListener("blur", (e)=>{
	e.preventDefault();
	let value = (input.value).toUpperCase
	input.value = value
})