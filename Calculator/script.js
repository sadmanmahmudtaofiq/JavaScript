"use strict";

// (eval) this is used for make a calculator
const input = document.getElementById("input");

const getNumber = (num) => {
  input.value += num;
};

const result = () => {
  if(input.value) input.value = eval(input.value);
};

const reset = () => {
  input.value = "";
};
