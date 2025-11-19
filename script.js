const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
     const prices=document.querySelectorAll(".price");
	let totalsumOfPrice=0;
	for(let price of prices){
		let priceRs=parseInt(price.textContent)
		totalsumOfPrice+=priceRs;
	}
	let row=document.createElement("tr");
	row.innerHTML=`<td>Total Price</td><td>${totalsumOfPrice}</td>`
	const table=document.querySelector("table");
	table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

