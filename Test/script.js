"use strict";

const weeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    [weeks[3]]: {
      open: 12,
      close: 22,
    },
    [weeks[4]]: {
      open: 11,
      close: 23,
    },

    [weeks[6]]: {
      open: 0, // Open 24 hour
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return ([this.starterMenu[startIndex]], this.mainMenu[mainIndex]);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// Functions
/* const add = (...otheres) => {
  let sum = 0;
  for (let i = 0; i < otheres.length; i++) {
    sum += otheres[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);
add(12, 45, 676, 76, 3, 187);

const x = [10, 20, 30, 40, 50, 60, 70, 80, 90];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
*/

// var result = "TAOFIQQ" && "SADMAN";
// console.log(result);

// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

/* OR */
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

/* NULISH */
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

/* && */
// rest1.owner = rest1.owner && "<ANONYMOUS>"
// rest2.owner = rest2.owner && "<ANONYMOUS>"
// rest1.owner &&= "<ANONYMOUS>"
// rest2.owner &&= "<ANONYMOUS>"

// console.log(rest1);
// console.log(rest2);

// for of loop:

/* let names = [
  "Italian",
  "Pizzeria",
  "Vegetarian",
  "Organic",
  "Focaccia",
  "Bruschetta",
  "Garlic Bread",
  "Caprese Salad",
];

const shoppingCart = [
  { item: "Laptop", price: 1200 },
  { item: "Headphones", price: 200 },
  { item: "Mouse", price: 50 },
];

const numbers = [10, 20, 30, 6, 0, 65, 65, 0, 0, 4, 4, 65, 51, 465, 54];

let total = 0;
for (const nums of numbers) {
  total += nums;
}

console.log(total);

for (const [ind, ele] of names.entries()) console.log(`${ind + 1}: ${ele}`); */

// for in loop (runs for objects)

/* const person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key]);
}
 */

// SETS

// const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto"]);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const newStuff = [...new Set(staff)];
// console.log(newStuff);

// for (let i = 0; i < newStuff.length; i++) {
//   console.log(newStuff[i]);
// }
//
// const fruits = new Map();

// Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

// console.log(question);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`answer ${key}: ${value}`);
// }

// const answer = 2;
// console.log(question.get(question.get("correct") === answer));

// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// #1
const events = [...new Set(gameEvents.values())];
// console.log(events);

// #2
gameEvents.delete(64);
// console.log(gameEvents);

const check = new Map([
  [true, "You are an adult"],
  [false, "You are a teenager"],
]);

let ages = [];
const people = 5;

// for (let i = 0; i < people; i++) {
//   let random = Math.ceil(Math.random() * 30);
//   ages.push(random);
//   let text = ages[i] >= 18 ? true : false,
//     message = check.get(text);
//   console.log(i + 1 + ": " + message);
// }

// const letters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   0,
//   "!@#$%^&*`~",
// ].join("");

// let len = 10,
//   random = "";

// for (let i = 0; i < len; i++) {
//   random += letters[Math.floor(Math.random() * letters.length)];
// }
// console.log(random);

/* const [firstName, lastName] = "Sadman Mahmud".split(" "),
  newName = ["Mr.", firstName, lastName.toUpperCase()];

console.log(newName.join(" "));

const capitalizeName = (name) => {
  const names = name.split(" "),
    namesUpper = [];

  for (let n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(...namesUpper);
};

capitalizeName("sadman mahmud taofiqq");
capitalizeName("abdur rahman aniqq");

const maskCreditCard = (number) => {
  const str = String(number);
  return str.slice(0, 4).padEnd(str.length - 2, "**") + str.slice(-2);
};

console.log(maskCreditCard("01799915092"));
console.log(maskCreditCard("01787744084"));

 */

const texts = `underscore_case
 first_name
Some_Variable
 calculate_Age
 sadman_mahmud
     abdur_Rahman`,
  rows = texts.split("\n");
/* 
for (const [i, row] of rows.entries()) {
  const [first, second] = row.toLowerCase().trim().split("_");
  const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
  console.log(`${output.padEnd(20)}${"✨".repeat(i + 1)}`);
} */

// 🔴 Delayed Departure from FAO to TXL (11h25)
//             Arrival from BRU to FAO (11h45)
// 🔴 Delayed Arrival from HEL to FAO (12h05)
//             Departure from FAO to LIS (12h30)

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
/* 
for (const [i, flight] of flights.split("+").entries()) {
  const [type, from, to, time] = flight.split(";");

  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll("_", " ").trim()} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(":", "h")})`;
  console.log(output);
}
 */

// ----- FUNCTIONS -----

/* const bookings = [];
function createBooking(flight, passengers = 1, price = 199 * passengers) {
  const booked = {
    flight,
    passengers,
    price,
  };
  console.log(booked);
}

createBooking("LH12", 5);
createBooking("HB520", 10); */

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("Hey")("TAOFIQ");

const flight = {
  airline: "BNP",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.booking.push({ flightNum, name });
  },
};

// flight.book(255, "Jamal");
// console.log(flight);

const book = flight.book;

const swiss = {
  airline: "Swiss Air Line",
  iataCode: "FZ",
  booking: [],
};

/* book.call(swiss, 654, "Kamal"); 

const flightData = [231, "Karim",231, "Karim"];
book.apply(swiss, flightData);

book.call(swiss, ...flightData); 
console.log(swiss); */
const newSwiss = book.bind(swiss, 54);
// newSwiss("JJK");
// console.log(swiss);

const headers = document.querySelectorAll(".nav-link"),
  helloEle = document.querySelector(".hero-subtitle"),
  myNameEle = document.querySelector(".hero-title"),
  myName2Ele = document.querySelector(".author-name"),
  textInfoEle = document.querySelector(".hero-description"),
  downloadEle = document.querySelector(".btn-primary"),
  languageEle = document.querySelector(".lang-picker"),
  createdEle = document.querySelector(".copyright > span"),
  date = document.querySelector(".copyright > a"),
  language = document.querySelector(".lang-picker");
let getLanguage;

const languageData = new Map([
  [
    "english",
    {
      subTitle: "Hello",
      myName: "Sadman mahmud",
      description:
        "In this Video I am gonna show you how to create a personal website with all pages. After Watching this tutorial you will be able to create website like this.",
      download: "Download CV",
      created: "This website created by",
      im: "I'm",
      header: [
        "Home",
        "About Us",
        "Services",
        "Portfolio",
        "Experience",
        "Contact",
      ],
    },
  ],
  [
    "bangla",
    {
      subTitle: "হ্যালো, স্বাগতম।",
      myName: "সাদমান মাহমুদ",
      description:
        "এই ভিডিওতে আমি আপনাদের দেখাবো কিভাবে সমস্ত পেজ সহ একটি ব্যক্তিগত ওয়েবসাইট তৈরি করতে হয়। এই টিউটোরিয়ালটি দেখার পর আপনিও এরকম একটি ওয়েবসাইট তৈরি করতে পারবেন।",
      download: "সিভি ডাউনলোড করুন",
      created: "এই ওয়েবসাইটটি তৈরি করেছেন",
      im: "আমি",
      header: [
        "হোম",
        "আমাদের সম্পর্কে",
        "পরিষেবাসমূহ",
        "পোর্টফোলিও",
        "অভিজ্ঞতা",
        "যোগাযোগ",
      ],
    },
  ],
  [
    "hindi",
    {
      subTitle: "नमस्ते, स्वागत है",
      myName: "सदमान महमूद",
      description:
        "इस वीडियो में मैं आपको दिखाऊंगा कि सभी पेज वाली पर्सनल वेबसाइट कैसे बनाते हैं। यह ट्यूटोरियल देखने के बाद आप इस तरह की वेबसाइट बना पाएंगे।",
      download: "सीवी डाउनलोड करें",
      created: "यह वेबसाइट इनके द्वारा बनाई गई है",
      im: "मैं हूँ",
      header: [
        "होम",
        "हमारे बारे में",
        "सर्विसेज़",
        "पोर्टफोलियो",
        "अनुभव",
        "संपर्क करें",
      ],
    },
  ],

  // 🇪🇸 Spanish
  [
    "spanish",
    {
      subTitle: "Hola, bienvenido",
      myName: "Sadman Mahmud",
      description:
        "En este video te mostraré cómo crear un sitio web personal con todas las páginas. Después de ver este tutorial podrás crear un sitio web como este.",
      download: "Descargar CV",
      created: "Este sitio web fue creado por",
      im: "Soy",
      header: [
        "Inicio",
        "Sobre nosotros",
        "Servicios",
        "Portafolio",
        "Experiencia",
        "Contacto",
      ],
    },
  ],

  // 🇫🇷 French
  [
    "french",
    {
      subTitle: "Bonjour",
      myName: "Sadman Mahmud",
      description:
        "Dans cette vidéo, je vais vous montrer comment créer un site web personnel avec toutes les pages. Après ce tutoriel, vous pourrez créer un site comme celui-ci.",
      download: "Télécharger CV",
      created: "Ce site a été créé par",
      im: "Je suis",
      header: [
        "Accueil",
        "À propos",
        "Services",
        "Portfolio",
        "Expérience",
        "Contact",
      ],
    },
  ],

  // 🇩🇪 German
  [
    "german",
    {
      subTitle: "Hallo",
      myName: "Sadman Mahmud",
      description:
        "In diesem Video zeige ich dir, wie man eine persönliche Website mit allen Seiten erstellt. Nach diesem Tutorial kannst du eine ähnliche Website erstellen.",
      download: "Lebenslauf herunterladen",
      created: "Diese Website wurde erstellt von",
      im: "Ich bin",
      header: [
        "Startseite",
        "Über uns",
        "Dienstleistungen",
        "Portfolio",
        "Erfahrung",
        "Kontakt",
      ],
    },
  ],

  // 🇸🇦 Arabic
  [
    "arabic",
    {
      subTitle: "مرحبا",
      myName: "سدمان محمود",
      description:
        "في هذا الفيديو سأوضح لك كيفية إنشاء موقع شخصي يحتوي على جميع الصفحات. بعد مشاهدة هذا الدرس ستتمكن من إنشاء موقع مشابه.",
      download: "تحميل السيرة الذاتية",
      created: "تم إنشاء هذا الموقع بواسطة",
      im: "أنا",
      header: [
        "الرئيسية",
        "معلومات عنا",
        "الخدمات",
        "معرض الأعمال",
        "الخبرة",
        "اتصل بنا",
      ],
    },
  ],

  // 🇨🇳 Chinese (Simplified)
  [
    "chinese",
    {
      subTitle: "你好",
      myName: "萨德曼 马哈茂德",
      description:
        "在这个视频中，我将向你展示如何创建一个包含所有页面的个人网站。观看本教程后，你将能够创建类似的网站。",
      download: "下载简历",
      created: "本网站由创建",
      im: "我是",
      header: ["首页", "关于我们", "服务", "作品集", "经验", "联系"],
    },
  ],
]);

language.addEventListener("change", () => {
  getLanguage = languageData.get(`${language.value.toLowerCase()}`);
  changeLanguage();
});

const changeLanguage = () => {
  let { subTitle, im, myName, description, download, created, header } =
    getLanguage;
  helloEle.innerHTML = subTitle;
  let newName = myName.split(" ");
  myNameEle.innerHTML = `${im} <span>${newName[0]}</span> ${newName[1]}`;
  myName2Ele.textContent = myName;
  textInfoEle.textContent = description;
  downloadEle.textContent = download;
  createdEle.textContent = created;

  for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = header[i];
  }
};
