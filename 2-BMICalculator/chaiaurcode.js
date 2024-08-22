const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const height = parseInt(document.querySelector('#height').value);
	const weight = parseInt(document.querySelector('#weight').value);
	const result = document.querySelector('#results');

	if (height === '' || height < 0 || isNaN(height)) {
		result.innerHTML = `Please enter the valid height ${height}`
	} else if (weight === '' || weight < 0 || isNaN(weight)) {
		result.innerHTML = `Please enter the valid weight ${weight}`
	} else {
		const bmi = (weight / ((height ** 2) / 10000)).toFixed(2)
		if (bmi < 18.6) {
			result.innerHTML = `${bmi} You are Under Weight`
		} else if (18.6 < bmi & bmi < 24.9) {
			result.innerHTML = `${bmi} You are Normal Range`
		} else if (bmi > 24.9) {
			result.innerHTML = `${bmi} You are Over Weight`
		}
	}



})