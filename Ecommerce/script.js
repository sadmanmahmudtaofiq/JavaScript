"use strict";

window.addEventListener("load", () => {
  const checkbox = document.getElementById("checkbox");
  if (checkbox) {
    checkbox.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
  const checkbox2 = document.getElementById("checkbox2");
  if (checkbox2) {
    checkbox2.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

const main = document.querySelector("main");
const addToCartDiv = document.querySelector(".addToCartNum");
const addToCartDiv2 = document.querySelector(".addToCartNum2");
const addToCartNum = document.querySelector(".addToCartNum p");
const addToCartNum2 = document.querySelector(".addToCartNum2 p");
const header = document.querySelector("header");

let data = [
  {
    image:
      "https://i.pinimg.com/736x/35/56/f4/3556f43906e8468c8bcf108d4e1060f5.jpg",
    name: "Eren Yeager",
    anime: "Attack On Titan",
    quantity: 0,
    aniCode: "AOT",
    price: 50,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/23/d2/be/23d2be9644d6d4a6584765096607461d.jpg",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    quantity: 0,
    aniCode: "N",
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
    aniCode: "F",
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
    aniCode: "R",
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
    aniCode: "AS",
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
  {
    image:
      "https://i.pinimg.com/736x/29/37/35/293735427788c0c14defb4f2c24b0841.jpg",
    name: "Shigeo Kageyama",
    anime: "Mob Psycho 100",
    quantity: 0,
    aniCode: "MP100",
    price: 20,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/b9/ff/56/b9ff56209b3d5156c0790e01ecde7abf.jpg",
    name: "Luffy",
    anime: "One Piece",
    quantity: 0,
    aniCode: "OP",
    price: 30.25,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/d4/e8/6b/d4e86bfbcda83b13248573c45c5047d3.jpg",
    name: "Light Yagami",
    anime: "Death Note",
    quantity: 0,
    aniCode: "DN",
    price: 22.95,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/1200x/43/22/5b/43225b48e5048398916d281f96fb16e0.jpg",
    name: "Levi Ackerman",
    anime: "Attack On Titan",
    quantity: 0,
    aniCode: "AOT",
    price: 27.45,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/04/76/60/0476600977d3f39dc3850526c87d5a15.jpg",
    name: "Gojo Satoru",
    anime: "Jujutsu Kaisen",
    quantity: 0,
    aniCode: "JJK",
    price: 29.99,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/11/d9/9f/11d99f7c3f5e39e855dc5866a4ac7e55.jpg",
    name: "Itadori Yuji",
    anime: "Jujutsu Kaisen",
    quantity: 0,
    aniCode: "JJK",
    price: 24.65,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/de/65/e2/de65e24e2d5c0ecb45140548e54853f5.jpg",
    name: "Killua Zoldyck",
    anime: "Hunter x Hunter",
    quantity: 0,
    aniCode: "HXH",
    price: 23.5,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/1200x/5d/d5/1a/5dd51ab77f44420e4a51c81a006961e3.jpg",
    name: "Gon Freecss",
    anime: "Hunter x Hunter",
    quantity: 0,
    aniCode: "HXH",
    price: 22.75,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/1200x/60/01/8c/60018ce13a38e6715f7ae873837bb05b.jpg",
    name: "Ayanokoji Kiyotaka",
    anime: "Classroom of the Elite",
    quantity: 0,
    aniCode: "COTE",
    price: 26.35,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/1200x/6f/b0/2e/6fb02e9254fbf6e0aa28242c3ec0b936.jpg",
    name: "Anya Forger",
    anime: "Spy x Family",
    quantity: 0,
    aniCode: "SXF",
    price: 18.45,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/60/27/72/6027726039c7bd7058b8f8e3e6cf873c.jpg",
    name: "Thorfinn",
    anime: "Vinland Saga",
    quantity: 0,
    aniCode: "VS",
    price: 28.75,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/736x/fd/ae/ff/fdaeffffb87002f139913dea66e8abd4.jpg",
    name: "Ichigo Kurosaki",
    anime: "Bleach",
    quantity: 0,
    aniCode: "BLCH",
    price: 28.99,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/1200x/0a/f5/f3/0af5f3f293d0b6ae865515f1c4feb3f6.jpg",
    name: "Edward Elric",
    anime: "Fullmetal Alchemist",
    quantity: 0,
    aniCode: "FMA",
    price: 29.95,
    rating: 5,
  },
  {
    image:
      "https://i.pinimg.com/1200x/bb/60/5b/bb605ba9d77ffdd117eb543165453bd0.jpg",
    name: "Gintoki Sakata",
    anime: "Gintama",
    quantity: 0,
    aniCode: "GTM",
    price: 26.75,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/1200x/33/18/40/3318407c6259df96fb2ddfce0314c52c.jpg",
    name: "Kaguya Shinomiya",
    anime: "Kaguya-sama: Love is War",
    quantity: 0,
    aniCode: "KGLW",
    price: 24.99,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/1200x/07/92/22/079222e2c501e5cbb20e8c45040371fd.jpg",
    name: "Rukia Kuchiki",
    anime: "Bleach",
    quantity: 0,
    aniCode: "BLCH",
    price: 27.5,
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/736x/29/e9/67/29e9671ac6eaded4b173e7e8e7416744.jpg",
    name: "Sasuke Uchiha",
    anime: "Naruto",
    quantity: 0,
    aniCode: "N",
    price: 20,
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

  if (savedQuantity > 0) {
    if (addToCartNum2) {
      addToCartNum2.innerHTML = savedQuantity;
    }
    if (addToCartDiv2) {
      addToCartDiv2.classList.remove("none");
    }
  } else {
    if (addToCartDiv2) {
      addToCartDiv2.classList.add("none");
    }
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

// Search

const search = document.getElementById("search");
const search2 = document.getElementById("search2");
let showResult;

search.addEventListener("input", () => {
  let inputValue = search.value;
  showResult = "";
  if (inputValue) {
    const searchResult = data.filter((item) => {
      const firstLetter = inputValue.toLowerCase();
      return (
        item.anime.trim().toLowerCase().startsWith(firstLetter) ||
        item.aniCode.trim().toLowerCase().startsWith(firstLetter) ||
        item.name.trim().toLowerCase().startsWith(firstLetter)
      );
    });

    if (searchResult.length !== 0) {
      searchResult.forEach((element) => {
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
              <button class="addToCart2">Add to Cart</button>
            </div>
          </div>
        </section>
        `;
        showResult += code;
      });
      if (main) {
        main.innerHTML = showResult;
        addSearchAddToCartListeners(searchResult);
        bindAllAddToCartButtons(searchResult);
      }
      sectionWidth();
    } else {
      if (main) {
        main.innerHTML = `
        <p class="notFound">No Anime found "${inputValue}"</p> 
        `;
      }
    }
  } else {
    if (main) {
      showResult = "";
      main.innerHTML = html;
    }
  }
});

search2.addEventListener("input", () => {
  let inputValue = search2.value;
  showResult = "";
  if (inputValue) {
    const searchResult = data.filter((item) => {
      const firstLetter = inputValue.toLowerCase();
      return (
        item.anime.trim().toLowerCase().startsWith(firstLetter) ||
        item.aniCode.trim().toLowerCase().startsWith(firstLetter) ||
        item.name.trim().toLowerCase().startsWith(firstLetter)
      );
    });

    if (searchResult.length !== 0) {
      searchResult.forEach((element) => {
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
        showResult += code;
      });
      if (main) {
        main.innerHTML = showResult;
        addSearchAddToCartListeners(searchResult);
        bindAllAddToCartButtons(searchResult);
      }
      sectionWidth();
    } else {
      if (main) {
        main.innerHTML = `
        <p class="notFound">No Anime found "${inputValue}"</p> 
        `;
      }
    }
  } else {
    if (main) {
      showResult = "";
      main.innerHTML = html; // Reset to original content
    }
  }
});

function addSearchAddToCartListeners(searchResult) {
  const addToCartBtns = document.querySelectorAll(".addToCart2");
  addToCartBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      let item = searchResult[i];
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
      showAddToCartNum();
    });
  });
}

function bindAllAddToCartButtons(items) {
  const buttons = document.querySelectorAll(".addToCart, .addToCart2");
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      let item = items[i];
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
      showAddToCartNum();
    });
  });
}

function sectionWidth() {
  const section = document.querySelectorAll("section");
  if (section.length === 1) {
    section[0].classList.add("sectionWidth");
  }
}

function menu() {
  const menu = document.querySelector(".menu");
  const menuSlider = document.querySelector(".menuSlider");
  menu.addEventListener("click", () => {
    menuSlider.classList.toggle("showMenu");
  });
}
menu();
