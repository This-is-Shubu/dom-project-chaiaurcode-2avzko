const form = document.querySelector("form");

form.addEventListener("submit", (submit) => {
	submit.preventDefault();
	const height = parseInt(document.querySelector("#height").value);
	const weight = parseInt(document.querySelector("#weight"));

	const heightInM = height * (1 / 100);

	function BMI() {
		weight * heightInM ** 2;
	}
	const results = document.querySelector("#results");
});
