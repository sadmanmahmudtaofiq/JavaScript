"use strict";

let cart = localStorage.getItem("cartData") || [];
let quantity = parseInt(localStorage.getItem("cartQuantity")) || 0;
const content = document.querySelector(".content");
const orderSummary = document.querySelector(".orderSummary");
const COS = document.querySelector(".COS");
const totalOrder = document.getElementById("totalOrder");

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

function getDate() {
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = threeDaysLater.getDate();
  const month = months[threeDaysLater.getMonth()];
  const weekday = days[threeDaysLater.getDay()];
  return `${weekday}, ${month} ${day}`;
}

const encodedCart = encodeURIComponent(cart);
const encodedQuantity = encodeURIComponent(JSON.stringify(quantity));
const newURL = `${window.location.pathname}?cart=${encodedCart}&quantity=${encodedQuantity}`;
if (newURL) window.history.replaceState({}, "", newURL);

const params = new URLSearchParams(window.location.search);
const dataParam = params.get("cart");
const getCartData = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : [];
console.log(getCartData);

function renderCartItems() {
  let html = "";
  getCartData.forEach((element) => {
    let { name, image, quantity, price, aniCode } = element;
    html += `
      <div class="cart">
          <h3 class="subtitle">
          Delivery date:
          <span class="deliveryDate">${getDate()}</span>
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
                          <input type="radio" id="${aniCode}" name="${aniCode}" value="${aniCode}" checked/>
                          <label for="${aniCode}" class="deliveryDateLabel">${getDate()}</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  if (getCartData.length === 0 && content) {
    content.innerHTML = `<p class="noItem">No Item Yet!</p>`;
    orderSummary.classList.add("removeOrderSummary");
    COS.classList.add("COSText");
  } else {
    content.innerHTML = html;
    orderSummary.classList.remove("removeOrderSummary");
    COS.classList.remove("COSText");
  }

  attachDeleteListeners();
}

renderCartItems();

function updateCheckoutQuantity() {
  const checkoutItems = document.querySelector(".checkoutItems");
  if (checkoutItems) {
    let total = 0;

    for (let i = 0; i < getCartData.length; i++) {
      total += getCartData[i].quantity;
    }
    checkoutItems.innerHTML = total;
  }
  const checkoutItems2 = document.querySelector(".checkoutItems2");
  if (checkoutItems2) {
    let total = 0;

    for (let i = 0; i < getCartData.length; i++) {
      total += getCartData[i].quantity;
    }
    checkoutItems2.innerHTML = total;
  }
}

function attachDeleteListeners() {
  const deleteBtns = document.querySelectorAll(".delete");

  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      getCartData.splice(i, 1);

      localStorage.setItem("cartData", JSON.stringify(cart));

      let newQuantity = 0;
      for (let i = 0; i < cart.length; i++) {
        newQuantity += cart[i].quantity;
      }
      localStorage.setItem("cartQuantity", newQuantity);

      renderCartItems();
      updateCheckoutQuantity();
      showPrice();
    });
  });
}

updateCheckoutQuantity();

function showPrice() {
  const showPrice = document.querySelector(".ShowPrice");
  const beforeTax = document.querySelector(".beforeTax");

  let showTotalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    showTotalPrice += cart[i].price * cart[i].quantity;
  }

  if (showPrice && beforeTax) {
    showPrice.innerHTML = showTotalPrice.toFixed(2);
    beforeTax.innerHTML = showTotalPrice.toFixed(2);
  }
  if (totalOrder) {
    totalOrder.innerHTML = (showTotalPrice + 2.07).toFixed(2);
  }
}
showPrice();
