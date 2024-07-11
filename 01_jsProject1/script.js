const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {

  button.addEventListener("click", function (changedColor) {

    if (changedColor.target.id === "Yellow") {

      body.style.backgroundColor = changedColor.target.id;
    } else if (changedColor.target.id === "Red") {

      body.style.backgroundColor = changedColor.target.id;
    } else if (changedColor.target.id === "Blue") {

      body.style.backgroundColor = changedColor.target.id;
    } else if (changedColor.target.id === "Orange") {


      body.style.backgroundColor = changedColor.target.id;
    } else if (changedColor.target.id === "Pink") {
      body.style.backgroundColor = changedColor.target.id;
    }

  });
  
});
