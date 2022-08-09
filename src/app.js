/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  btn.addEventListener("click", function Mezclar() {
    const btn = document.querySelector("btn");
    const clases = ["♦", "♥", "♠", "♣"];
    let index = Math.floor(Math.random() * clases.length);
    let newClass = clases[index];
    var carta = newClass;
    if (newClass === "♥" || newClass === "♦") {
      document.querySelector(".card").style.color = "red";
    } else {
      document.querySelector(".card").style.color = "black";
    }
    document.getElementById("uno").innerHTML = newClass;
    document.getElementById("tres").innerHTML = newClass;
    const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let randomNumber = Math.floor(Math.random() * number.length);
    let newNumber = number[randomNumber];
    document.getElementById("dos").innerHTML = newNumber;
  });
};
