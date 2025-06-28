"use strict";

window.addEventListener("load", () => {
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
});

const main = document.querySelector("main");
const section = document.querySelectorAll("section");
const addToCartDiv = document.querySelector(".addToCartNum");
const addToCartNum = document.querySelector(".addToCartNum p");
const header = document.querySelector("header");

let data = [
  {
    image:
      "https://i.pinimg.com/736x/11/91/ea/1191ea350db0db7f35a7dcc58dae3553.jpg",
    name: "Eren Yeager",
    anime: "Attack On Titan",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/23/d2/be/23d2be9644d6d4a6584765096607461d.jpg",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    quantity: 0,
  },

  {
    image:
      "https://i.pinimg.com/736x/10/02/0a/10020ab38160ac8620fa2a4480bb4006.jpg",
    name: "Kamado Tanjiro",
    anime: "Demon Slayer",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/7c/b6/8b/7cb68bf255344047c4b10dfdc1f13c14.jpg",
    name: "Senku Ishigami",
    anime: "Dr. Stone",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/67/e4/fa/67e4fa9d792fdbcd7f9351ecf1f4eb87.jpg",
    name: "Isagi Yoichi",
    anime: "Blue Lock",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/6c/47/6b/6c476b47466b056c3f590af4668e995a.jpg",
    name: "Saitama",
    anime: "One Punch Man",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/c4/42/22/c4422259f05cd6bf4e276542d1fc9afd.jpg",
    name: "Frieren",
    anime: "Frieren",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/91/25/fb/9125fb5231cfb09f4799d4979a24d414.jpg",
    name: "Denji",
    anime: "Chainsaw Man",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/86/30/23/8630231294aff2d9deeba290b36ea0d0.jpg",
    name: "Seth",
    anime: "Radiant",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/7e/42/f9/7e42f9d4b754953c589d779d37d87578.jpg",
    name: "Masamune Makabe",
    anime: "Masamune-Kun No Revenge",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/ea/bc/97/eabc97adaa230c157b83c14fcfd2e500.jpg",
    name: "Amagami Sister",
    anime: "Tying the Knot with an Amagami Sister",
    quantity: 0,
  },
  {
    image:
      "https://i.pinimg.com/736x/6b/95/27/6b9527694c0f39f684549ba64bfa67d4.jpg",
    name: "Ken Takakura",
    anime: "Dandadan",
    quantity: 0,
  },
];

let html = "";

data.forEach((element) => {
  let { name, image, anime } = element;
  let code = `
  <section>
    <div class="image">
      <img src="${image}" alt="${name}" loading="eager">
    </div>
    <div class="text">
      <p class="name">${name}</p>
      <p class="anime">${anime}</p>
      <button class="addToCart">Add to Cart</button>
    </div>
  </section>
  `;
  html += code;
});

main.innerHTML = html;

const addToCartBtn = document.querySelectorAll(".addToCart");

export const saveData = [];

export let totalQuantity = 0;

addToCartBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let item = data[i];

    let existingIndex = saveData.findIndex((d) => d.name === item.name);

    if (existingIndex === -1) {
      item.quantity = 1;
      saveData.push(item);
    } else {
      saveData[existingIndex].quantity += 1;
    }

    // totalQuantity reset
    totalQuantity = 0;
    saveData.forEach((item) => (totalQuantity += item.quantity));

    console.log("মোট quantity:", totalQuantity);
    console.log(saveData);

    showAddToCartNum();
  });
});

function showAddToCartNum() {
  if (totalQuantity !== 0) {
    addToCartNum.innerHTML = totalQuantity;
    addToCartDiv.classList.remove("none");
  } else {
    addToCartDiv.classList.add("none");
  }
}
showAddToCartNum();

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("headerBg");
  } else {
    header.classList.remove("headerBg");
  }
});
