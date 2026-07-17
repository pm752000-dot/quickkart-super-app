document.addEventListener("DOMContentLoaded", () => {

  console.log("QuickKart App Loaded");

  let buttons = document.querySelectorAll(".product button");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      let product = button.parentElement;

      let name = product.querySelector("h3").innerText;
      let price = product.querySelector("p").innerText;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        name: name,
        price: price
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(name + " added to cart 🛒");

    });

  });

});
