const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price cells
    const prices = document.querySelectorAll(".price");

    // Remove old total row if it already exists
    const oldRow = document.querySelector(".total-price-row");
    if (oldRow) oldRow.remove();

    let totalSumOfPrice = 0;

    // Sum all prices
    for (let price of prices) {
        let priceValue = parseInt(price.textContent);
        if (isNaN(priceValue)) continue;  // Ignore bad values
        totalSumOfPrice += priceValue;
    }

    // Create new row for total
   // let row = document.createElement("tr");
   // row.className="total-price-row";

    // colspan="2" → one cell covering both columns
    //row.innerHTML = `<tr class="total-price-row"><td colspan="2">Total: Rs ${totalSumOfPrice}</td></tr>`;

    // Append to table
   const table = document.querySelector("table");
    //table.appendChild(row);
	table.innerHTML += `<tr class="total-price-row"><td colspan="2">Total: Rs ${totalSumOfPrice}</td></tr>`;
};

getSumBtn.addEventListener("click", getSum);

