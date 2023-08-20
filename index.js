let total = 0
// let discount = total - 20%
function cardClick(target){
    const itemContainer = document.getElementById('selectItem')
    const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = itemName
    itemContainer.appendChild(li)

    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0]
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("totalPrice").innerText = total.toFixed(2);
    // discount
    if(total >= 200){
        const discount = total * 0.20;
        const finalTotal = total - discount;
        
        document.getElementById("discount").innerText = discount.toFixed(2);
        document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
    }
   

    
}