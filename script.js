 let getSumBtn=document.getElementById("get-sum")
 let table=document.querySelector("table")
 let prices=document.querySelectorAll(".price")

 
   getSumBtn.addEventListener("click",()=>{
	     let totalPrice=0;
	    prices.forEach((price)=>{
     	let realPrice=parseInt(price.textContent.trim())
	  if(!isNaN(realPrice)){
	  totalPrice+=realPrice
	  }
  })
	     // 🔥 agar pehle se total row hai to hata do
  let oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }
	   const tr=document.createElement("tr")
	     tr.id = "total-row";
	   tr.innerHTML=`<td colspan="2">${totalPrice}</td>`
	   table.appendChild(tr)
   })


