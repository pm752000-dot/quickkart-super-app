document.addEventListener("DOMContentLoaded", function () {

  // Add to Cart
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach(function(button){

    button.addEventListener("click", function(){

      const product = button.closest(".product");

      const name = product.querySelector("h3").innerText;
      const price = product.querySelector("p").innerText;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        name:name,
        price:price
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(name + " Added to Cart 🛒");

    });

  });

  // Cart Page
  const cartItems = document.getElementById("cart-items");

  if(cartItems){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(function(item){

      let div = document.createElement("div");

      div.className="product";

      let qty = 1;

div.innerHTML = `
  <h3>${item.name}</h3>
  <p>${item.price}</p>

  <div class="qty-box">
    <button class="minus">-</button>
    <span class="qty">${qty}</span>
    <button class="plus">+</button>
  </div>
`;

      cartItems.appendChild(div);

      total += parseInt(item.price.replace(/[^0-9]/g,"")) || 0;

    });

    document.getElementById("cart-total").innerText="Total: ₹"+total;

    document.getElementById("clear-cart").onclick=function(){

      localStorage.removeItem("cart");

      location.reload();

    };

  }

});
