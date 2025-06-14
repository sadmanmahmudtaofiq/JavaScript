"use strict";

const title = document.querySelectorAll(".title");
const content = document.querySelectorAll(".content");
const icon = document.querySelectorAll(".icon");

title.forEach((btn, item) => {
  btn.addEventListener("click", () => {
    if (!content[item].classList.contains("show")) {
      content.forEach((ct) => ct.classList.remove("show"));
      title.forEach((tt) => tt.classList.remove("showBorder"));
      icon.forEach((ic) => (ic.innerHTML = "+"));

      content[item].classList.add("show");
      title[item].classList.add("showBorder");
      icon[item].innerHTML = "-";
    } else {
      content[item].classList.remove("show");
      title[item].classList.remove("showBorder");
      icon[item].innerHTML = "+";
    }
  });
});

function changeBg() {
  let texts = "";

  let LAN = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    let randomC = LAN[Math.floor(Math.random() * 16)];
    texts += randomC;
  }
  document.body.style.backgroundColor = `#${texts}`;
  document.body.style.color = "white";
}

const changeColorBtn = document.querySelector(".firstTitle button");
changeColorBtn.addEventListener("click", () => changeBg());

function changeColor() {
  let color = "";
  let LAN = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    let randomC = LAN[Math.floor(Math.random() * 16)];
    color += `${randomC}`;
  }
  changeColorBtn.style.color = `#${color}`;
}

setInterval(() => {
  changeColor();
}, 500);

function randomPassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&?";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomPass = chars[Math.floor(Math.random() * chars.length)];
    password += randomPass;
  }
  return password;
}

const input = document.querySelector(".passwordInput");
const generateBtn = document.querySelector(".generateBtn");
const showPassword = document.querySelector(".showPassword");

generateBtn.addEventListener("click", () => {
  let inputValue = input.value;
  if (!isNaN(inputValue) && inputValue < 21) {
    showPassword.innerHTML = randomPassword(inputValue);
  } else if (isNaN(inputValue)) {
    showPassword.innerHTML = `"${inputValue}" isn't a Number, Please Enter a Number!`;
  } else {
    showPassword.innerHTML = `"${inputValue}" is to Long, Enter a Number less than 20 `;
  }
});

function bus() {
  const bus = document.querySelectorAll(".busName div input");

  const ticket = document.querySelectorAll(".ticket div input");

  const busSubmit = document.querySelector(".busSubmit");
  const customarNameInput = document.getElementById("customarName");
  const showBusInfo = document.querySelector(".showBusInfo");

  const busInfo = [
    "BRTC Bus Route",
    "ETC Bus Route",
    "Moitri Bus Route",
    "Thikana Bus Route",
  ];

  const ticketInfo = ["A1", "A2", "A3", "B1", "B2", "B3"];

  const bCode = ["BRTC", "ETC", "MBR", "TBR"];

  let saveBusName;
  let saveBcode;
  let saveTicket;

  bus.forEach((b, index) => {
    b.onclick = () => {
      if (b.checked) {
        saveBusName = busInfo[index];
        saveBcode = bCode[index];
      }
    };
  });

  ticket.forEach((t, index) => {
    t.onclick = () => {
      if (t.checked) {
        saveTicket = ticketInfo[index];
      }
    };
  });

  busSubmit.onclick = () => {
    let customarName = customarNameInput.value;
    if (saveBusName && saveBcode && saveTicket && customarName) {
      showBusInfo.innerHTML = `${customarName} booked a seat on ${saveBusName} ${saveBcode}-${saveTicket}`;
    }
  };
}
bus();

function randomValue() {
  const symboles = ["✊", "✋", "✌"];
  return symboles[Math.floor(Math.random() * symboles.length)];
}

let saveResult;
let total = {
  win: 0,
  lose: 0,
  tie: 0,
};

function player(playerV) {
  const computerV = randomValue();
  console.log(playerV);

  if (playerV === computerV) {
    saveResult = "Tie";
    total.tie++;
  } else if (
    (playerV === "✊" && computerV === "✌") ||
    (playerV === "✋" && computerV === "✊") ||
    (playerV === "✌" && computerV === "✋")
  ) {
    saveResult = "You win";
    total.win++;
  } else {
    saveResult = "You lose";
    total.lose++;
  }

  showGameResult(playerV, computerV);
}

const gameResult = document.getElementById("showGameResult");
const totalValue = document.getElementById("total");

function showGameResult(playerV, computerV) {
  gameResult.innerHTML = `${playerV}-${computerV} ${saveResult}`;
  totalValue.innerHTML = `Wins:${total.win}, Loses:${total.lose}, Tie:${
    total.tie
  }, Total:${total.win + total.lose + total.tie}`;
}

function reset() {
  saveResult = "";
  gameResult.innerHTML = "You - Computer ";
  total.win = 0;
  total.lose = 0;
  total.tie = 0;
  totalValue.innerHTML = `Wins:${total.win}, Loses:${total.lose}, Tie:${
    total.tie
  }, Total:${total.win + total.lose + total.tie}`;
}

ticTacToe();
function ticTacToe() {
  const boxes = document.querySelectorAll(".box");
  const resetBtn = document.getElementById("reset");
  const message = document.getElementById("message");

  let turnO = true;

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((b) => {
    b.addEventListener("click", () => {
      b.innerHTML = turnO ? "O" : "X";
      turnO = !turnO;
      b.disabled = true;
      checkWinner();
    });
  });

  const disableBtns = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBtns = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.classList.remove("redColor");
      message.innerText = "";
    }
  };

  resetBtn.addEventListener("click", () => {
    enableBtns();
    resetGame();
  });

  const resetGame = () => {
    turnO = true;
    enableBtns();
  };

  const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    disableBtns();
  };

  const checkWinner = () => {
    for (const pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          boxes[pattern[0]].classList.add("redColor");
          boxes[pattern[1]].classList.add("redColor");
          boxes[pattern[2]].classList.add("redColor");
        }
      }
    }
  };
}

// Prototype

/* const employee = {
  fun1() {
    console.log("Function 1");
  },
  fun2() {
    console.log("Function 2");
  },
  fun3() {
    console.log("Function 3");
  },
};

const testE = {
  job() {
    console.log("You get a job.");
  },
};

Object.setPrototypeOf(testE, employee);
console.log(testE); */

/* class person {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.fullName}. And I'm ${this.age} years old.`
    );
  }
}

const taofiq = new person("Taofiq", 15);
console.log(taofiq, taofiq.greet());
const ahmad = new person("Ahmad", 13);
console.log(ahmad, ahmad.greet());
 */

class person {
  eat() {
    return "eat";
  }
  sleep() {
    return "sleep";
  }
  work() {
    // Defult object
    return "Do nothing!";
  }
}

class worker extends person {
  whatDo(name, work){
    console.log(`${name} work as a ${work} and he ${this.eat()} and ${this.sleep()} everyday.`);
  }
}

let taofiq = new worker();

class worker2 extends person {
  whatDo(name, work){
    console.log(`${name} work as a ${work} and he ${this.eat()} and ${this.sleep()} everyday.`);
  }
}

let hasan = new worker();

taofiq.whatDo("Taofiq", "Developer");
hasan.whatDo("Hasan", "Banker")