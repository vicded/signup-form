"use strict";

let id = (id) => document.getElementById(id);
let classess = (classess) => document.getElementsByClassName(classess);

const button = document.getElementById("bttn");

button.style.textTransform = "uppercase";

const info = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const firstName = id("first-name");
const lastName = id("last-name");
const email = id("email");
const password = id("password");
const form = id("form");
const errorMsg = classess("error");
const icon = classess("icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validation(firstName, 0, "First Name cannot be empty");
  validation(lastName, 1, "Last Name cannot be empty");
  validation(email, 2, "Looks like this is not a mail");
  validation(password, 3, "Password cannot be empty");
});

let validation = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "1px solid var(--red)";
    icon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].innerHTML = "";
    icon[serial].style.opacity = "0";
    id.style.border = "1px solid lightgrey";
  }
};
