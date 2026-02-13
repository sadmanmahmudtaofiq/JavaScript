"use strict";

const URL = `https://dummyjson.com/products?limit=195`;

const getData = async () => {
  let response = await fetch(URL);
  let responseData = await response.json();
  let getData = responseData.products;
  return getData;
};
let data = await getData();

function ratingFunc() {
  let rateNum = [4, 45, 5];
  let randomNum = rateNum[Math.floor(Math.random() * rateNum.length)];
  return randomNum;
}

function createElement() {
  let code = ``;
  data.forEach((item) => {
    let { title, category, description, price, minimumOrderQuantity } = item;
    let html = `
    <section>
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
            <img
                src="${item.images[0]}"
                alt="${category}"
            />
            </div>

            <div class="flip-card-back">
            <img
                src="${item.images[0]}"
                alt="${category}"
            />
            <h2>${category}</h2>
            <p class="hoverTitle">
                ${title}
            </p>
            <p class="description">
                ${description}
            </p>
            </div>
        </div>
        </div>

        <div class="info">
        <p class="title" title="${title}">
            ${title}
        </p>
        <div class="rating">
            <img
            class="ratingImg"
            src="https://sadmanmahmudtaofiq.github.io/Amazon/Photos/rating-${ratingFunc()}.png"
            alt=""
            />
            <p class="ratingText" title="${minimumOrderQuantity}">${minimumOrderQuantity}</p>
        </div>
        <p class="price" title="${price}">$${price}</p>
        </div>
        <div class="btn">
        <button title="Add to Cart">Add to Cart</button>
        </div>
    </section>
    `;
    code += html;
  });
  document.querySelector(".container").innerHTML = code;
}

createElement();

const showDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  document.querySelector(".showDate").innerHTML = year;
};

showDate();
