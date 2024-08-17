const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		console.log(e.target);
		switch (e.target.id) {
			case "grey":
				body.style.backgroundColor = "grey";
				break;
			case "white":
				body.style.backgroundColor = "white";
				break;
			case "blue":
				body.style.backgroundColor = "blue";
				break;
			case "yellow":
				body.style.backgroundColor = "yellow";
				break;
			case "pink":
				body.style.backgroundColor = "pink";
				break;
			case "black":
				body.style.backgroundColor = "black";
				break;
			case "orange":
				body.style.backgroundColor = "orange";
				break;
			case "green":
				body.style.backgroundColor = "green";
				break;
			default:
				body.style.backgroundColor = "red";
				break;
		}
	});
});
