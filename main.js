let cartCount = 0;
let totalPrice = 0;
const cartCountElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const popup = document.getElementById("checkout-popup");
const popupCartItems = document.getElementById("popup-cart-items");
const popupTotalPrice = document.getElementById("popup-total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function(){
    cartCount++;
    cartCountElement.textContent = cartCount;

    const productCard = this.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = parseFloat(productCard.querySelector(".price").dataset.price);
    totalPrice += productPrice;
    totalPriceElement.textContent = totalPrice.toFixed(2);

    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItemsElement.appendChild(cartItem)

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil"
    deleteButton.classList.add("delete-btn")
    deleteButton.addEventListener("click", function(){
      cartItemsElement.removeChild(cartItem);
      cartCount--;
      totalPrice -= productPrice;
      totalPriceElement.textContent = totalPrice.toFixed(2);
      cartCountElement.textContent =cartCount
    })
    cartItem.appendChild(deleteButton)
  });
});

document.querySelector(".checkout-btn").addEventListener("click", function(){
  if(cartCount === 0){
    alert("Ürün ekle")
  }else{
  popup.classList.add("show");
  popupCartItems.innerHTML = cartItemsElement.innerHTML;
  popupTotalPrice.textContent = totalPriceElement.textContent;
}
})

function closePopup(){
  popup.classList.remove("show")
}

document.querySelector(".clear-cart-btn").addEventListener("click", function(){
  cartCount = 0;
  totalPrice = 0;
  cartCountElement.textContent = cartCount;
  totalPriceElement.textContent = "0.00";
  popupCartItems.innerHTML = "";
  popupTotalPrice.textContent = "0.00";
  cartItemsElement.innerHTML = "";
})