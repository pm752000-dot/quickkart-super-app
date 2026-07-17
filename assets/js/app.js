document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".product button");

  buttons.forEach(function(button){

    button.addEventListener("click", function(){

      const product = button.closest(".product");

      const name = product.querySelector("h3").innerText;
      const price = product.querySelector("p").innerText;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        name: name,
        price: price
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(name + " Added to Cart 🛒");

    });

  });

});
