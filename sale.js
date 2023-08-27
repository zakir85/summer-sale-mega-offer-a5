let totalPrice = 0;

function handleClickButton(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemPrice = target.parentNode.childNodes[1].innerText;
    const newItemPrice = parseFloat(itemPrice);
    // console.log(typeof newItemPrice);
    totalPrice = parseFloat(totalPrice) + newItemPrice;
    document.getElementById("total-price").innerText = totalPrice;

    // const itemName = document.getElementById("product-name").innerText;
    const itemName = target.parentNode.parentNode.childNodes[5].innerText;
    console.log(itemName);
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

        // Calculate Discount and update grand total
    let totalDiscount = 0;
    let grandTotal = totalPrice;

    if (totalPrice > 200) {
        totalDiscount = 0.2 * totalPrice;
        grandTotal = totalPrice - totalDiscount;
    }

    document.getElementById('total-discount').textContent = `${totalDiscount.toFixed(2)}`;
    document.getElementById('grand-total-price').textContent = `${grandTotal.toFixed(2)}`;

}


    // Apply coupon code ------ function------------------------

function applyCoupon() {
    const couponCodeInput = document.getElementById("coupon-code-input-field");
    const couponApplyBtn = document.getElementById("coupon-apply-btn");
    const purchaseBtn = document.getElementById("purchase-btn");

    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    const couponCode = "SELL200";    // Coupon code
    const saleAmount = 200.00;    // Sale amount
    
    if (couponCodeInput.value.toUpperCase() === couponCode && totalPrice > saleAmount) {
        couponApplyBtn.classList.remove("disabledBtn");
        couponApplyBtn.classList.add("bg-[#E527B2]"); 
        purchaseBtn.disabled = false;
    } else {
        couponApplyBtn.classList.add("disabledBtn");
        couponApplyBtn.classList.remove("bg-[#E527B2]");
        couponApplyBtn.innerText = "Apply";
        purchaseBtn.disabled = true;
    }
}


    // Card Reset----------------------------------------------
    function reloadPage() {
        location.reload();
        }
    
