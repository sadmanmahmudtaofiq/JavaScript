"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sqNumbers = numbers.map((num) => num * num);
// console.log(sqNumbers);

const sadmanBus = {
  bus: "Sadman Bus",
  busCode: "SB",
  ticket: [],
  book(seatNumber, name) {
    console.log(
      `${name} book a seat on ${this.bus} ticket ${this.busCode}-${seatNumber}`
    );
    this.ticket.push({ ticketInfo: `${this.bus}-${seatNumber}`, name });
  },
};

/* sadmanBus.book("S2", "Sadman");
sadmanBus.book("S3", "Mahmud");
sadmanBus.book("S1", "Taofiq");
console.log(sadmanBus); */

const taofiqBus = {
  bus: "Taofiq Bus",
  busCode: "TB",
  ticket: [],
};

const book = sadmanBus.book;

/* book.call(taofiqBus, "B2", "Tamim");
book.call(taofiqBus, "B3", "Ameen");
console.log(taofiqBus); */

//https://youtu.be/KC-JUipn3gA?list=PLSNRR4BKcowDMTFWYgMqRHRuohVA6IKiD&t=654
//https://www.youtube.com/watch?v=7qSy_pAAZog&t=987s

const section1 = document.querySelector(".section_1");
const section2 = document.querySelector(".section_2 img");
const section3 = document.querySelector(".section_3");

const imageLink = [
  "../Images/1.jpg",
  "../Images/2.jpg",
  "../Images/3.jpg",
  "../Images/4.jpg",
  "../Images/5.jpg",
  "../Images/6.jpg",
  "../Images/7.jpg",
  "../Images/8.jpg",
  "../Images/9.jpg",
  "../Images/10.jpg",
];

let numberSave = 0;
section2.src = imageLink[numberSave];

section3.addEventListener("click", () => {
  numberSave++;
  if (numberSave > 10) {
    numberSave = 1;
  }
  section2.src = imageLink[numberSave];
  console.log(numberSave);
});

section1.addEventListener("click", () => {
  numberSave--;
  if (numberSave < 1) {
    numberSave = 10;
  }
  section2.src = imageLink[numberSave];
  console.log(numberSave);
});
