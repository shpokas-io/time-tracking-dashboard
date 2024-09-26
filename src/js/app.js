"use strict";

// GLOBAL VARIABLES
let timeFrame = "weekly"; //This is default value
const container = document.querySelector(".container");
let regularCard; // Placeholder for all the cards

//1. Make menu
const menu = document.querySelectorAll(".menu-link");

menu.forEach((element) => {
  element.addEventListener("click", menuOnClick);
});

//2. GET JSON DATA & CREATE CARDS

let data = {};
// MAKING LOCAL API FECTH
fetch("./js/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });

//--------Functions

function menuOnClick(event) {
  // console.log("click", event.target.innerText.toLowerCase());
  menu.forEach((element) => {
    element.classList.remove("menu-active");
  });
  event.target.classList.add("menu-active");
  timeFrame = event.target.innerText.toLowerCase();

  updateCards(timeFrame);
}

function updateCards(timeFrame) {}
