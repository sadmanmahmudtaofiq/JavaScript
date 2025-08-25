const submit = document.getElementById("submit");
const inputs = document.querySelectorAll("input");

const saveValues = {};

submit.addEventListener("click", () => {
  inputs.forEach((i) => {
    saveValues[i.getAttribute("name")] = i.value;
    console.log(saveValues);
  });
});
