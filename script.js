"use strict";

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactName.value === "" || contactEmail.value === "") {
    console.log("hi");
  } else {
    emailjs
      .sendForm(
        "service_hxf6e5a",
        "template_pcr9kjc",
        "#contact-form",
        "8dabSZqO4hCxq4lAU"
      )
      .then(
        () => {
          console.log("hello");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }
};
