//your JS code here. If required.
const input = document.querySelector('#fname')
input.addEventListener("focusout", (e)=>{
	// e.preventDefault();
	let value = String(input.value)
	input.value = value.toUpperCase()
})