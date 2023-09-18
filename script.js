"use strict";

const submitBtn = document.querySelector(".submit__btn");
const containerBox = document.querySelector(".container");
const thankYouBox = document.querySelector(".thankYou__container");
const submittedNumber = document.querySelectorAll(".numbers");
const submittedNumberSpan = document.getElementById("selectedNumber");

let selectedNumber = "";

submittedNumber.forEach((number) =>
  number.addEventListener("click", () => {
    submittedNumber.forEach((n) => {
      n.style.backgroundColor = "";
      n.style.color = "";
    });
    number.style.color = "#f4f6f7";
    number.style.backgroundColor = "#f07b3f";

    selectedNumber = number.id;
  })
);

thankYouBox.style.display = "none";

submitBtn.addEventListener("click", () => {
  containerBox.style.display = "none";
  thankYouBox.style.display = "block";

  submittedNumberSpan.textContent = selectedNumber;
});
