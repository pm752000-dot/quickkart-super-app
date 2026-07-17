alert("JS File Loaded");

window.onload = function () {

  const buttons = document.getElementsByTagName("button");

  alert("Buttons Found: " + buttons.length);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      alert("Button Click Working");
    };
  }

};
