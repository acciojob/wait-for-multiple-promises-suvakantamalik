//your JS code here. If required.
function createPromises(promiseName){
	return new Promise((resolve) => {
		const timeTaken = (Math.random() * 2 + 1).toFixed(3); //help to get value between 1.000 to 3.000
												//toFixed() => helps to get 3 decimal
		setTimeout(() => {
			resolve({promiseName, timeTaken});
		}, timeTaken * 1000);
	})
}

function populatetable(promiseResults, totalTime){
	const tableBody = document.getElementById("output");
	tableBody.innerHTML = "";

	promiseResults.forEach((result, index) => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${result.promiseName}</td>
			<td>${result.timeTaken}</td>
		` 
		tableBody.appendChild(row);
	});

	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `
		<td>Total</td>
		<td>${totalTime.toFixed(3)}</td>
	`
	tableBody.appendChild(totalRow);
}

function handlePromises(){
	const tableBody = document.getElementById("output");
	tableBody.innerHTML = `
		<tr id="loading">
			<td  colspan="2">Loading...</td>
		</tr>
		`;

	const promises = [
		createPromises('Promise 1'),
		createPromises('Promise 2'),
		createPromises('Promise 3')
	];

	const startTime = performance.now();
	Promise.all(promises).then((result) => {
		const totalTime = (performance.now() - startTime)/1000;
		populatetable(result, totalTime);
	});
}
handlePromises();