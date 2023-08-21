let total = 0;
const applyBtn = document.getElementById("applyBtn");
function cardClick(target) {
  // set card title
  const itemContainer = document.getElementById("selectItem");
  const itemName = target.querySelector(".card-title").innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  itemContainer.appendChild(li);
  // set totalPrice
  const price = parseFloat(target.querySelector("p span").innerText);
  total += price;
  document.getElementById("totalPrice").innerText = total.toFixed(2);

  // set button disable
  const btnPurchase = document.getElementById("btnPurchase");
  if (total > 0) {
    btnPurchase.disabled = false;
    btnPurchase.style.backgroundColor = "#E527B2";
    if (total >= 200) {
      applyBtn.style.backgroundColor = "#E527B2";
    }
  } else {
    btnPurchase.disabled = true;
  }
}

// Apply Button and Discount
function applyCoupon() {
  const couponInput = document.getElementById("couponInput");
  const couponCode = couponInput.value;
  console.log(couponCode);

  if (total >= 200) {
    // applyBtn.disabled = false;
    if (couponCode === "SELL200") {
      const discount = total * 0.2;
      const finalTotal = total - discount;
      applyBtn.style.backgroundColor = "#ddd";
      document.getElementById("discount").innerText = discount.toFixed(2);
      document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
    }
    else{
      alert('Invalid Coupon Code')
    }
    couponInput.value = "";
  } else {
    applyBtn.disabled = true;
  }
}
// go home button
function purchaseItem(){
  window.location.href = "index.html"
}