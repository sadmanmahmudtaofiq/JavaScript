"use strict";

let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let quantity = parseInt(localStorage.getItem("cartQuantity")) || 0;

window.addEventListener("load", () => {
  const checkbox = document.getElementById("checkbox");
  if (checkbox) {
    checkbox.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY >= 10
    ? header.classList.add("headerBg")
    : header.classList.remove("headerBg");
});

const subSubContainer = document.querySelector(".subSubContainer");

function renderCartItems() {
  let html = "";
  cart.forEach((element) => {
    let { name, image, quantity, price, aniCode } = element;
    html += `
      <div class="cart">
          <h3 class="subtitle">
          Delivery date:
          <span class="deliveryDate"> Monday, June 30 </span>
          </h3>

          <div class="item">
              <img src="${image}" alt="" />
              <div class="itemText">
                  <p class="subSubTitle">${name}</p>
                  <p class="price">$${price}</p>
                  <div class="quanBtn">
                      <p>Quantity: <span class="qiantity">${quantity}</span></p>
                      <button class="delete">Delete</button>
                  </div>
                  <div class="deliveryoption">
                      <p class="subSubTitle">delivery option:</p>
                      <div>
                          <input type="radio" id="${aniCode}" name="${aniCode}" value="${aniCode}" checked />
                          <label for="${aniCode}" class="deliveryDateLabel">Monday, June 30</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  if (cart.length === 0 && subSubContainer) {
    subSubContainer.innerHTML = "No Item ";
  } else {
    subSubContainer.innerHTML = html;
  }

  attachDeleteListeners();
}

function updateCheckoutQuantity() {
  const checkoutItems = document.querySelector(".checkoutItems");
  if (checkoutItems) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    checkoutItems.innerHTML = total;
  }
}

function attachDeleteListeners() {
  const deleteBtns = document.querySelectorAll(".delete");

  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      cart.splice(i, 1);

      localStorage.setItem("cartData", JSON.stringify(cart));

      let newQuantity = 0;
      for (let i = 0; i < cart.length; i++) {
        newQuantity += cart[i].quantity;
      }
      localStorage.setItem("cartQuantity", newQuantity);

      renderCartItems();
      updateCheckoutQuantity();
    });
  });
}

renderCartItems();
updateCheckoutQuantity();


