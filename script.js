const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
     const prices=document.querySelectorAll(".price");
	const oldRow = document.querySelector(".total-price-row");
    if (oldRow) oldRow.remove();
	let totalsumOfPrice=0;
	for(let price of prices){
		let priceRs=parseInt(price.textContent)
		if(isNaN(priceRs))continue;
		totalsumOfPrice+=priceRs;
	}
	let row=document.createElement("tr");
	 row.classList.add("total-price-row"); // Important!
	row.innerHTML=`<td colspan="2">${totalsumOfPrice}</td>`
	const table=document.querySelector("table");
	table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

