"use strict";

const btns = document.querySelectorAll(".btns"),
  modal = document.querySelectorAll(".modal"),
  overlay = document.querySelector(".overlay"),
  closeModalBtn = document.querySelectorAll(".close-btn");

const modalClose = (i) => {
  modal[i].classList.add("hidden");
  overlay.classList.add("hidden");
};

const modalOpen = (i) => {
  modal[i].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    modalOpen(i);
  });
}

for (let i = 0; i < closeModalBtn.length; i++) {
  closeModalBtn[i].addEventListener("click", () => {
    modalClose(i);
  });
}

overlay.addEventListener("click", () => {
  for (let i = 0; i < modal.length; i++) {
    modalClose(i);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    for (let i = 0; i < modal.length; i++) {
      if (!modal[i].classList.contains("hidden")) {
        modalClose(i);
      }
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === String(1)) {
    modalOpen(0);
  } else if (e.key === String(2)) {
    modalOpen(1);
  }else if (e.key === String(3)) {
    modalOpen(2);
  }
});
