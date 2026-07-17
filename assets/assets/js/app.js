alert("JS Working");
document.addEventListener("DOMContentLoaded", function () {

  alert("QuickKart JS Loaded");

  let buttons = document.querySelectorAll(".product button");

  buttons.forEach(function(button){

    button.addEventListener("click", function(){

      alert("Product Added To Cart 🛒");

    });

  });

});
