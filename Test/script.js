"use strict";

window.addEventListener("load", () => {
  const checkbox = document.getElementById("checkbox");
  if (checkbox) {
    checkbox.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

const main = document.querySelector("main");
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
    aniCode: "AOT",
    price: 30.5,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/23/d2/be/23d2be9644d6d4a6584765096607461d.jpg",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    quantity: 0,
    aniCode: "NT",
    price: 30.99,
    rating: 45,
  },

  {
    image:
      "https://i.pinimg.com/736x/10/02/0a/10020ab38160ac8620fa2a4480bb4006.jpg",
    name: "Kamado Tanjiro",
    anime: "Demon Slayer",
    quantity: 0,
    aniCode: "DS",
    price: 30.8,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/7c/b6/8b/7cb68bf255344047c4b10dfdc1f13c14.jpg",
    name: "Senku Ishigami",
    anime: "Dr. Stone",
    quantity: 0,
    aniCode: "DRS",
    price: 25.5,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/67/e4/fa/67e4fa9d792fdbcd7f9351ecf1f4eb87.jpg",
    name: "Isagi Yoichi",
    anime: "Blue Lock",
    quantity: 0,
    aniCode: "BL",
    price: 20.95,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/6c/47/6b/6c476b47466b056c3f590af4668e995a.jpg",
    name: "Saitama",
    anime: "One Punch Man",
    quantity: 0,
    aniCode: "OPM",
    price: 25.55,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/c4/42/22/c4422259f05cd6bf4e276542d1fc9afd.jpg",
    name: "Frieren",
    anime: "Frieren",
    quantity: 0,
    aniCode: "FR",
    price: 27.85,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/91/25/fb/9125fb5231cfb09f4799d4979a24d414.jpg",
    name: "Denji",
    anime: "Chainsaw Man",
    quantity: 0,
    aniCode: "CM",
    price: 20.35,
    rating: 45,
  },
  {
    image:
      "https://i.pinimg.com/736x/e8/c1/9d/e8c19dbb454d83c3f8ba77e03ef01b4c.jpg",
    name: "Seth",
    anime: "Radiant",
    quantity: 0,
    aniCode: "RA",
    price: 15.5,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/7e/42/f9/7e42f9d4b754953c589d779d37d87578.jpg",
    name: "Masamune Makabe",
    anime: "Masamune-Kun No Revenge",
    quantity: 0,
    aniCode: "MNR",
    price: 15.99,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/ea/bc/97/eabc97adaa230c157b83c14fcfd2e500.jpg",
    name: "Amagami Sister",
    anime: "Tying the Knot with an Amagami Sister",
    quantity: 0,
    aniCode: "",
    price: 20.35,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/6b/95/27/6b9527694c0f39f684549ba64bfa67d4.jpg",
    name: "Ken Takakura",
    anime: "Dandadan",
    quantity: 0,
    aniCode: "DD",
    price: 25.65,
    rating: 45,
  },
  {
    image:
      "https://i.pinimg.com/736x/63/27/a3/6327a3b1bdb1dacb349f953ccc5fe810.jpg",
    name: "Kirie Goshima",
    anime: "Uzumaki",
    quantity: 0,
    aniCode: "UZM",
    price: 25.65,
    rating: 4,
  },
    {
    image:
      "https://i.pinimg.com/736x/5e/aa/fc/5eaafc594cd1c7679db747fc6fc707dc.jpg",
    name: "Taki Tachibana",
    anime: "Your Name",
    quantity: 0,
    aniCode: "YN",
    price: 25.65,
    rating: 45,
  },
      {
    image:
      "https://images.squarespace-cdn.com/content/v1/5ccabcf60b77bdbb3acaf70a/1579260217183-CBLRYEE3Z6NPYE7178K0/weathering-with-you-japanese-anima.jpg",
    name: "Mitsuha Miyamizu & Makoto Shinkai",
    anime: "Weathering with You",
    quantity: 0,
    aniCode: "WWY",
    price: 25.65,
    rating: 4,
  },
];

let html = "";

data.forEach((element) => {
  let { name, image, anime, rating } = element;
  let code = `
  <section>
    <div class="image">
      <img src="${image}" alt="${name}" loading="eager">
    </div>
    <div class="text">
      <p class="name">${name}</p>
      <p class="anime">${anime}</p>
      <div>
        <img src="https://sadmanmahmudtaofiq.github.io/Amazon/Photos/rating-${rating}.png" alt="rating">
        <button class="addToCart">Add to Cart</button>
      </div>
    </div>
  </section>
  `;
  html += code;
});

if (main) {
  main.innerHTML = html;
}

const addToCartBtn = document.querySelectorAll(".addToCart");

let savedCart = JSON.parse(localStorage.getItem("cartData")) || [];
let savedQuantity = parseInt(localStorage.getItem("cartQuantity")) || 0;

console.log("🛒 Saved cart items:", savedCart);
console.log("📦 Total quantity:", savedQuantity);

function saveCartToLocalStorage() {
  localStorage.setItem("cartData", JSON.stringify(savedCart));
  localStorage.setItem("cartQuantity", savedQuantity.toString());
}

addToCartBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let item = data[i];
    let existingIndex = savedCart.findIndex((d) => d.name === item.name);

    if (existingIndex === -1) {
      item.quantity = 1;
      savedCart.push(item);
    } else {
      savedCart[existingIndex].quantity += 1;
    }

    savedQuantity = 0;
    savedCart.forEach((item) => (savedQuantity += item.quantity));
    saveCartToLocalStorage();

    console.log("মোট quantity:", savedQuantity, savedCart);

    showAddToCartNum();
  });
});

function showAddToCartNum() {
  if (savedQuantity > 0) {
    if (addToCartNum) {
      addToCartNum.innerHTML = savedQuantity;
    }
    if (addToCartDiv) {
      addToCartDiv.classList.remove("none");
    }
  } else {
    if (addToCartDiv) {
      addToCartDiv.classList.add("none");
    }
  }
}
showAddToCartNum();

setInterval(() => {
  showAddToCartNum();
}, 1000);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("headerBg");
  } else {
    header.classList.remove("headerBg");
  }
});
