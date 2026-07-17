document.addEventListener("DOMContentLoaded", function () {

  alert("QuickKart Working");

  const buttons = document.querySelectorAll(".product button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

      const product = button.closest(".product");
      const name = product.querySelector("h3").textContent;
      const price = product.querySelector("p").textContent;

      alert(name + "\n" + price + "\nAdded to Cart 🛒");

    });
  });

});
