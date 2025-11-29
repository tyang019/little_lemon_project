const cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemsDiv = document.getElementById("checkoutItems");
const totalDiv = document.getElementById("checkoutTotal");

// SHOW ITEMS IN CHECKOUT
let total = 0;
cart.forEach(item => {
  itemsDiv.innerHTML += `
    <p>${item.name} — $${item.price}</p>
  `;
  total += item.price;
});

// SHOW TOTAL
totalDiv.textContent = `Total: $${total.toFixed(2)}`;


// PAYMENT HANDLER
document.getElementById("paymentForm").addEventListener("submit", function(event){
  event.preventDefault();

  showAlert("Payment successful! Thank you!");

  // CLEAR CART
  localStorage.removeItem("cart");

  // REDIRECT BACK TO CART
  //window.location.href = "cart.html";
});
