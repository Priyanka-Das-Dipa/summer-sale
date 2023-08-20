let total = 0
function cardClick(target){
    const itemContainer = document.getElementById('selectItem')
    const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = itemName
    itemContainer.appendChild(li)

    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0]
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("totalPrice").innerText = total;
    // console.log(target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0])
    
}