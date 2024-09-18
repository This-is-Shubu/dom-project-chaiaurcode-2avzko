console.log("Project 5");

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
	insert.innerHTML = `
	<div class="color">
	<table>
		<thead>
			<tr>
				<th>Key Code</th>
				<th>Key Value</th>
				<th>Key Name</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>${e.keyCode}</td>
				<td>${e.key === " " ? "Space" : e.key}</td>
				<td>${e.code}</td>
			</tr>
		</tbody>
	</table>
	</div>
	`;
});
