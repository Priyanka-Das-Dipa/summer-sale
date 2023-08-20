let total = 0
function cardClick(target){
    // set card title
    const itemContainer = document.getElementById('selectItem')
    const itemName = target.querySelector('.card-title').innerText
    const li = document.createElement('li')
    li.innerText = itemName
    itemContainer.appendChild(li)
    // set totalPrice
    const price = parseFloat(target.querySelector('p span').innerText);
    total += price;
    document.getElementById("totalPrice").innerText = total.toFixed(2);

    // set button disable
    const btnPurchase = document.getElementById("btnPurchase")
    if(total > 0){
        btnPurchase.disabled = false
    }
    else{
        btnPurchase.disabled = true
    }
    // discount
    /* if(total >= 200){
        const discount = total * 0.20;
        const finalTotal = total - discount;
        
        document.getElementById("discount").innerText = discount.toFixed(2);
        document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
    } */
  
}
function applyCoupon() {
    const couponInput = document.getElementById("couponInput");
    const couponCode = couponInput.value;
    const applyBtn = document.getElementById('applyBtn')
    if(total >= 200){
        applyBtn.disabled = false
        if (couponCode === "SELL200") {
            const discount = total * 0.20;
            const finalTotal = total - discount;
    
            document.getElementById("discount").innerText = discount.toFixed(2);
            document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
        }
        couponInput.value = "";
    }
    else{
        applyBtn.disabled = true
    }
    
}